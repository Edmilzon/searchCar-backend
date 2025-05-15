const prisma = require('../../config/prisma');

const agregarEnlace = async (data) => {
  const { id_carro, enlace } = data;

  const seguroCarro = await prisma.SeguroCarro.findFirst({
    where: {
      id_carro: id_carro,
    }
  });

  if (!seguroCarro) {
    throw new Error(`No se encontró un SeguroCarro vigente para id_carro = ${id_carro}`);
  }

  const seguroActualizado = await prisma.SeguroCarro.update({
    where: { id: seguroCarro.id },
    data: { enlace }
  });

  return seguroActualizado;
};

module.exports = { agregarEnlace };