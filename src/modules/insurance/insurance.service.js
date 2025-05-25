const prisma = require('../../config/prisma');

const credenciales = {
  async findByCarId(id_carro) {
    try {
      console.log('Id recibido desde controller:', id_carro);
      return await prisma.carro.findMany({
        where: { id: id_carro },
          select:{
            id:true,
            marca:true,
            modelo:true,
            Imagen : {
              take: 1,
                orderBy: {
                id: 'asc'
                 },
                select: {
                  id: true,
                  data: true,
                  id_carro: true
                }
              },
              Usuario: {
                select: {
                  id:true,
                  nombre: true,
                  telefono: true,
                  foto:true,
                  UsuarioRol:{
                    select:{
                      Rol:{
                        select:{
                          id:true, 
                          rol:true,}
                      }   
                    }
                  },
                },
              },
          SeguroCarro:{
            select:{
              id:true,
              fechaInicio:true,
              fechaFin:true,
              enlaceSeguro:true,
            Seguro:{
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
          
        },
      }
      })
    } catch (error) {
      console.error('Error al obtener los seguros por carro:', error);
    }
  },
};

module.exports = credenciales;