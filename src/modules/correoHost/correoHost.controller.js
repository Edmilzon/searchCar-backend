const { Router } = require("express");
const correoService = require('./correoHost.service');

const router = Router();

router.post('/', async (req, res) => {
    try {
        const correoHost = await correoService.envCorreoHost(req.body);
        
        const correoRenter = await correoService.envCorreoRenter(req.body);

        res.status(201).json({
            notificacion: correoHost,
            confirmacionRenter: correoRenter,
        });
        
    } catch (error) {
        console.error('Error en el controlador:', error);
        res.status(500).json({ 
            message: 'Error al procesar la solicitud',
            error: error.message 
        });
    }
});

module.exports = router;