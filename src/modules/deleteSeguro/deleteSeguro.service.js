const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteSeguro(id) {
  try {
    const seguro = await prisma.SeguroCarro.findUnique({
      where: { id: parseInt(id) },
    });

    if (!seguro) {
      throw new Error('El seguro con el ID proporcionado no existe.');
    }

    await prisma.tiposeguro.deleteMany({
      where: { segurocarro_id: parseInt(id) },
    });
    
    const result = await prisma.SeguroCarro.delete({
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