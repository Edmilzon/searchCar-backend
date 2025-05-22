const express = require('express');
const router = express.Router();
const { updateSeguro } = require('./updateSeguro.service');

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const updatedRecord = await updateSeguro(id, data);

    if (!updatedRecord) {
      return res.status(404).json({ error: 'Seguro no encontrado.' });
    }

    res.status(200).json(updatedRecord);
  } catch (error) {
    console.error('Error al actualizar el seguro:', error.message);
    res.status(500).json({ error: 'Error al actualizar el seguro y sus tipos asociados.' });
  }
});

module.exports = router;

 