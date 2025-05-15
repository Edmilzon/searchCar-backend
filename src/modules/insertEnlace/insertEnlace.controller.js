const express = require('express');
const seguroCarro = require('./insertEnlace.service');

const inserted = express.Router();

inserted.post('/', async (req, res) => {
  try {
    const insertJson = await seguroCarro.agregarEnlace(req.body);
    console.log('Insertado correctamente');
    res.status(201).json(insertJson);
  } catch (error) {
    res.status(500).json({ error: 'No insertada', detalle: error.message });
  }
});

module.exports = inserted;