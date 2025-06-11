const prisma = require('../../config/prisma');

const credenciales = {
  async findByCarId(id) {
    try {
      console.log('Id recibido desde controller:', id);
      return await prisma.seguroCarro.findMany({
        where: { id_carro: id},
        select: {
          id: true,
          Seguro: {
            select: {
              id:true,
              empresa: true,
              nombre: true,
              tipoSeguro: true,
            },
          },
          tiposeguro:{
            select:{
              id:true,
              tipoda_o:true,
              descripcion:true,
              cantidadCobertura:true,
            }
          }
        },
      });
    } catch (error) {
      console.error('Error al obtener los seguros por carro:', error);
    }
  },
};

module.exports= credenciales;