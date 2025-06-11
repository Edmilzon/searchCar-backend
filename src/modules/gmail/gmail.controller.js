const express = require('express');
  const userRenterService = require('./gmail.service');
  
  const userRenter = express.Router();
  
  userRenter.get('/:id', async (req, res) => {
      const renterId = parseInt(req.params.id);
      try {
          const userRenterJson = await userRenterService.findAll(renterId);
          if (!userRenterJson) {
              return res.status(404).json({ error: 'Host no encontrado' });
          }
          res.json(userRenterJson);
      } catch (error) {
          console.log(error); 
          res.status(500).json({ error: 'Error en el servidor' });
      }
  });
  
  module.exports = userRenter;