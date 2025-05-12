const prisma = require('../../config/prisma');

const agregarCredencial = async (data) => {
  const { id_SeguroCarro, tipodaño, descripcion, valides, enlace } = data;

  const seguroCarro = await prisma.SeguroCarro.findFirst({
    where: { id: id_SeguroCarro }
  });

  if (!seguroCarro) {
    throw new Error(`No se encontró un SeguroCarro con id_carro = ${id_carro}`);
  }

  const tipoSeguro = await prisma.tiposeguro.create({
    data: {
      tipoda_o: tipodaño,
      descripcion: descripcion,
      valides: valides,
      segurocarro_id: seguroCarro.id
    }
  });

  await prisma.SeguroCarro.update({
    where: { id: seguroCarro.id },
    data: { enlace: enlace }
  });

  return tipoSeguro;
};

module.exports = {agregarCredencial};