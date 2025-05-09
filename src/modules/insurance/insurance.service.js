const prisma = require('../../config/prisma');

const credenciales = {
  async findByCarId(id_carro) {
    try {
      console.log('Id recibido desde controller:', id_carro);
      return await prisma.seguroCarro.findMany({
        where: { id_carro: id_carro },
        select: {
          id: true,
          fechaInicio: true,
          fechaFin: true,
          enlace: true,
          id_carro: true,
          Seguro: {
            select: {
              empresa: true,
              nombre: true,
              tipoSeguro: true,
              valides: true,
              descripcion: true,
            },
          },
        },
      });
    } catch (error) {
      console.error('Error al obtener los seguros por carro:', error);
    }
  },
};

module.exports = credenciales;