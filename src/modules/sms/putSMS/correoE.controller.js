const express = require('express');
const correoEService = require('./correoE.service');

const correoE = express.Router();
const correoECorreo = express.Router();

correoE.put('/:id', async(req , res) =>{
    const id = req.params.id;
    const {estado} = req.body;

    try {
        const notificacion = await prisma.notificaion_confirmacion.findUnique({
            where: { id: Number(id) }
        });

        if (!notificacion) {
            return res.status(404).json({ error: 'Notificación no encontrada' });
        }

        if (notificacion.estado !== null) {
            return res.status(400).json({ error: 'El estado ya fue modificado y no puede cambiarse nuevamente' });
        }

        const updateNotificacion = await correoEService.updateEstado(id, estado);
        res.json(updateNotificacion);
    } catch (error) {
        console.log('Error al actualizar la notificación');
        res.status(500).json({ error: 'Error al actualizar la notificación' });
    }
})

correoECorreo.get('/:id', async (req, res) => {
    const id = req.params.id;
    const estado = req.query.estado === 'true';
    try {
        const notificacion = await prisma.notificaion_confirmacion.findUnique({
            where: { id: Number(id) }
        });

        if (!notificacion) {
            return res.status(404).send('Notificación no encontrada');
        }

        if (notificacion.estado !== null) {
            return res.status(400).send('El estado ya fue modificado y no puede cambiarse nuevamente');
        }

        await correoEService.updateEstado(id, estado);
        res.send(`<h2>Estado actualizado correctamente</h2>`);
    } catch (error) {
        res.status(500).send('Error al actualizar la notificación');
    }
});


module.exports = {correoE, correoECorreo};