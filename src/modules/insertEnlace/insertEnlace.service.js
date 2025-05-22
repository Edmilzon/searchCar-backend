/*const prisma = require('../../config/prisma');

const agregarEnlace = async (data) => {
  const { id_carro, enlaceSeguro } = data;

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
    data: { enlaceSeguro }
  });

  return seguroActualizado;
};

module.exports = { agregarEnlace };*/
const prisma = require('../../config/prisma');

const agregarEnlace = async (data) => {
  const { id_carro, enlaceSeguro } = data;

  // Validar que el enlace sea válido
  if (!enlaceSeguro || typeof enlaceSeguro !== 'string') {
    throw new Error('El campo enlaceSeguro es obligatorio y debe ser un string');
  }

  // Buscar el primer registro de seguroCarro relacionado al id_carro
  const seguroCarro = await prisma.seguroCarro.findFirst({
    where: {
      id_carro: id_carro,
    }
  });

  if (!seguroCarro) {
    throw new Error(`No se encontró un SeguroCarro vigente para id_carro = ${id_carro}`);
  }

  // Actualizar el enlace del seguro
  const seguroActualizado = await prisma.seguroCarro.update({
    where: { id: seguroCarro.id },
    data: { enlaceSeguro }
  });

  return seguroActualizado;
};

module.exports = { agregarEnlace };
