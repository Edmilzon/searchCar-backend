const express = require('express');
const correoEService = require('./correoE.service');

const correoE = express.Router();
const correoECorreo = express.Router();

correoE.put('/:id', async(req , res) =>{
    const id = req.params.id;
    const {estado} = req.body;

    try {
        const updateNotificacion = await correoEService.updateEstado(id, estado);
        res.json(updateNotificacion)
    } catch (error) {
        if (error.message === 'La notificacion ya fue respondida') {
            return res.status(400).json({ error: error.message });
        }
        console.log('Error al actualizar la notificación');
        res.status(500).json({ error: 'Error al actualizar la notificación' });
    }
})

correoECorreo.get('/:id', async (req, res) => {
    const id = req.params.id;
    const estado = req.query.estado === 'true';
    try {
        const updateNotificacion = await correoEService.updateEstado(id, estado);
        res.send(`<h2>Estado actualizado correctamente</h2>`);
    } catch (error) {
        if (error.message === 'La notificacion ya fue respondida') {
            return res.send(`<h2>Esta notificación ya fue respondida anteriormente</h2>`);
        }
        res.status(500).send('Error al actualizar la notificación');
    }
});


module.exports = {correoE, correoECorreo};