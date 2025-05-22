const express = require('express');
const router = express.Router();
const { deleteSeguro } = require('./deleteSeguro.service');

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    console.log(id);
    const result = await deleteSeguro(id);
    res.status(200).json({ message: 'Eliminación exitosa', result });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el seguro y sus tipos asociados.' });
    console.error(error);
  }
});

module.exports = router;
 