const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function correohost(mensaje, data) {
  try {
    const notifiacion = await prisma.notificaion_confirmacion.create({
      data: {
        mensaje: mensaje,
        estado: null,
        id_renter: data.id_renter || null,
        id_host: data.id_host || null,
      }
    });
    return notifiacion;
  } catch (error) {
    console.error('Error al guardar la notificación:', error);
    throw new Error('Error al procesar la solicitud');
  }
}

module.exports = {
  correohost,
};