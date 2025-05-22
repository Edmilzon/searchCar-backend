const prisma = require('../../config/prisma');

const agregarCredencial = async (data) => {
  const { id_SeguroCarro, tipodaño, descripcion, cantidadCobertura } = data;

  const seguroCarro = await prisma.SeguroCarro.findFirst({
    where: { id: id_SeguroCarro }
  });

  /*if (!seguroCarro) {
    throw new Error(`No se encontró un SeguroCarro con id_carro = ${id_carro}`);
  }*/

  const tipoSeguro = await prisma.tiposeguro.create({
    data: {
      tipoda_o: tipodaño,
      descripcion: descripcion,
      cantidadCobertura: cantidadCobertura,
      segurocarro_id: seguroCarro.id
    }
  });

  return tipoSeguro;
};

module.exports = {agregarCredencial};