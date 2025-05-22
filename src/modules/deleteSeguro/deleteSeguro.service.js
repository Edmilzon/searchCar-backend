const prisma = require('../../config/prisma');

async function deleteSeguro(id) {
  try {
    const seguro = await prisma.tiposeguro.findUnique({
      where: { id: parseInt(id) },
    });

    if (!seguro) {
      throw new Error('El seguro con el ID proporcionado no existe.');
    }

    const result = await prisma.tiposeguro.delete({
      where: { id: parseInt(id) },
    });
    
    return result;
  } catch (error) {
    console.error('Error al eliminar el seguro:', error);
    throw error;
  }
}

module.exports = {
  deleteSeguro,
};