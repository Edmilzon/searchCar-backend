const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateSeguro(id, data) {
  try {
    console.log('Datos recibidos para actualizar:', data);

    const updatedSeguroCarro = await prisma.SeguroCarro.update({
      where: { id: parseInt(id) },
      data: {
        fechaInicio: data.fechaInicio ? new Date(data.fechaInicio) : undefined,
        fechaFin: data.fechaFin ? new Date(data.fechaFin) : undefined,
        id_carro: data.id_carro,
        id_seguro: data.id_seguro,
        enlace: data.enlace,
        tiposeguro: {
          updateMany: data.tiposeguro?.map((ts) => ({
            where: { id: ts.id },
            data: {
              tipoda_o: ts.tipoda_o,
              descripcion: ts.descripcion,
              valides: ts.valides,
            },
          })),
        },
      },
      include: {
        tiposeguro: true,
      },
    });

    console.log('Registro actualizado:', updatedSeguroCarro);
    return updatedSeguroCarro;
  } catch (error) {
    console.error('Error al actualizar el seguro:', error);
    throw error;
  }
}
module.exports = {
  updateSeguro,
};
 