const prisma = require('../../config/prisma')

const carService = {
  async findById(id){
    try{
      console.log('Id recibido desde constroller',id);
      return await prisma.Carro.findUnique({
        where: { id },
        select: {
          marca:true,
          modelo:true,
          placa:true,
          a_o:true,
          asientos:true,
          puertas:true,
          soat:true,
          precio_por_dia:true,
          descripcion: true,
          transmicion:true,
          disponible_hasta:true,
          disponible_desde:true,
          Direccion: {
            select:{
                calle:true,
                zona:true,
                num_casa:true,
                Provincia:{
                    select:{
                        nombre:true,
                        Ciudad:{
                            select:{
                                nombre:true,
                            }
                        }
                    },
                },
            },
        },
        Usuario:{
          select:{
            nombre:true,
            telefono: true,
          }
        },
          CombustibleCarro:{
            select:{
              TipoCombustible:{
                select:{
                  tipoDeCombustible:true,
                }
              },
            },
          },
          Imagen:true,
          caracteristicasAdicionalesCarro:{
            select:{
              CarasteristicasAdicionales :{
                select:{
                  nombre:true,
                }
              },
            },
          },
        }
      });
    }catch (error) {
      console.log(error);
    }
  }
}

module.exports = carService;