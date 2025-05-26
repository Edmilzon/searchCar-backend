const prisma = require('../../config/prisma');

async function updateSeguro(id, data) {
  try {
    console.log('Datos recibidos para actualizar:', data);

    const updatedTipoSeguro = await prisma.tiposeguro.update({
    where: { id: parseInt(id) },
      data: {
        segurocarro_id: data.egurocarro_id,
        tipoda_o: data.tipoda_o,
        descripcion: data.descripcion,
        cantidadCobertura: data.cantidadCobertura
      }
    });

    console.log('Registro actualizado:', updatedTipoSeguro);
    return updatedTipoSeguro;
  } catch (error) {
    console.error('Error al actualizar el seguro:', error);
    throw error;
  }
}
module.exports = {
  updateSeguro,
};