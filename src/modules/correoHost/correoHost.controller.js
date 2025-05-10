const { Router } = require("express");
const correoService = require('./correoHost.service');

const router = Router();

router.post('/', async (req, res) => {
    try {
        const correoHost = await correoService.envCorreoHost(req.body);

        res.status(201).json(correoHost);
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ message: 'Error al recibir la notificación' });
    }
});

module.exports = router;