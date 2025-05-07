const { Router } = require('express');
const carroService = require('./insertCondition.service');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const condicionesUso = await carroService.addConditionsToCar(req.body);
    res.status(201).json(condicionesUso);
  } catch (error) {
    console.error('Error en el controlador:', error);
    res.status(500).json({ message: 'Error al asociar las condiciones de uso al carro' });
  }
});

module.exports = router;