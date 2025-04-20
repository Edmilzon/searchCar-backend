const prisma = require('../../config/prisma');

const findAll = async () => {
  try {
    return await prisma.carro.findMany({
      select: {
        id: true,
        modelo: true,
        marca: true,
        asientos:true,
        puertas:true,
        transmision:true,
        precio_por_dia: true,
        combustiblecarro:{
            select:{
            tipocombustible:{
              select:{
                tipo_de_combustible:true,
              }
            },
          },},
        estado:true,
        usuario_rol:{
            select:{
                usuario:{
                    select:{
                       nombre:true,
                    }
                }
            }
        },
        direccion: {
          select:{
              calle:true,
              provincia:{
                  select:{
                      ciudad:{
                          select:{
                              nombre:true,
                          }
                      }
                  },
              },
          },
        },
        imagen: {
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
        caracteristicasadicionalescarro: {
          select: {
            caracteristicas_adicionales: {
              select: {
                nombre: true
              },
            },
          },
        },
    }
    });
  } catch (error) {
    console.error('Error al obtener los carros:', error);
  }
};

module.exports = { findAll };