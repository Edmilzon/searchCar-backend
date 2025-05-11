const { Router } = require('express');
const envSMSService = require('./envSMS.service');

const router = Router();

router.get('/:id_host', async (req, res) => {
    const id_host = parseInt(req.params.id_host);
    console.log('ID del host recibido:', id_host);

    try {
        const sms = await envSMSService.findByHostId(id_host);
        if (!sms) {
            console.log('Notificación no encontrada');
            return res.status(404).json({ message: 'No se encontró una notificación para el host proporcionado' });
        }
        res.json(sms);
        console.log('Notificación encontrada:', sms);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la notificación' });
        console.error('Error en el controlador:', error);
    }
});

module.exports = router;