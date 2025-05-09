const express =require('express');
const buscarServicioCarro = require('./insurance.service');

const buscarServ= express.Router();

buscarServ.get('/:id', async (req, res) => {
    const carId = parseInt(req.params.id);
    try {
      const buscarJson = await buscarServicioCarro.findByCarId(carId);
  
      if (!buscarJson || buscarJson.length === 0) {
        console.log('Carro no encontrado');
        return res.status(404).json({ message: "Auto no disponible" });
      }
  
      console.log('Autos con credenciales');
      res.json(buscarJson);
    } catch (error) {
      console.error('Error al buscar el auto:', error);
      res.status(500).json({ error: 'Auto sin credencial', detalle: error.message });
    }
  });
  module.exports = buscarServ;