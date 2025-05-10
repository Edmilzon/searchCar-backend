const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteSeguro(id) {
  try {
    const result = await prisma.$transaction([
      prisma.tiposeguro.deleteMany({
        where: { segurocarro_id: parseInt(id) },
      }),
      prisma.seguroCarro.delete({
        where: { id: parseInt(id) },
      }),
    ]);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  deleteSeguro,
}; 
