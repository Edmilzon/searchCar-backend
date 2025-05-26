const { enviarCorreoHost, enviarCorreoRenter } = require('../envCorreo/email.service');
const { correohost } = require('./correoG.service');
const { Router } = require('express');

const router = Router();

router.post('/', async (req, res) => {
  try {

    const notificacion = await correohost('Mensaje de reserva', req.body);
  
    const mensajeHost = await enviarCorreoHost({...req.body, notificacionId: notificacion.id});

    const mensajeRenter = await enviarCorreoRenter(req.body);

    await correohost(mensajeHost, req.body);

    res.status(201).json({
      mensaje: mensajeHost,
      estado: "enviado"
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