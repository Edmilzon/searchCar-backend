const express = require('express');
const correoMService = require('./correoM.service');

const correoM = express.Router();

correoM.get('/:id', async(req, res) => {
    const hostId = parseInt(req.params.id)
    console.log("el ide del host es : " + hostId)
    try {
        correoMJson = await correoMService.findAll(hostId);
        res.json(correoMJson);
    } catch (error) {
        console.log('Correo no encontrado');
        res.status(500).json({ error: 'Correo no encontrado' });
    }
})

module.exports = correoM;