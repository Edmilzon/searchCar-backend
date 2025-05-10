const { Router } = require("express");
const correoService = require('./correoHost.service');

const router = Router();

router.post('/', async (req, res) => {
    try {
        // Recibir los datos del cuerpo de la solicitud
        const { renterEmail, hostEmail, subject, id_renter, id_host } = req.body;

        // Llamar al servicio para procesar la solicitud
        const correoHost = await correoService.envCorreoHost({
            renterEmail,
            hostEmail,
            subject,
            id_renter,
            id_host,
        });

        res.status(201).json(correoHost);
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ message: 'Error al recibir la notificación' });
    }
});

module.exports = router;