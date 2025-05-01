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
        transmicion:true,
        precio_por_dia: true,
        CombustibleCarro:{
            select:{
              TipoCombustible:{
              select:{
                tipoDeCombustible:true,
              }
            },
          },},
        estado:true,
        Usuario:{
          select:{
            nombre:true,
          }
        },
        Direccion: {
          select:{
              calle:true,
              Provincia:{
                  select:{
                    Ciudad:{
                          select:{
                              nombre:true,
                          }
                      }
                  },
              },
          },
        },
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
        caracteristicasAdicionalesCarro: {
          select: {
            CarasteristicasAdicionales: {
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