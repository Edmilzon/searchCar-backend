const prisma = require('../../config/prisma')

const carService = {
  async findById(id){
    try{
      console.log('Id recibido desde constroller',id);
      return await prisma.carro.findUnique({
        where: { id },
        select: {
          marca:true,
          modelo:true,
          placa:true, 
          precio_por_dia:true,
          direccion: {
            select: {
              calle: true,
              zona: true,
            }
          },
          combustiblecarro:{
            select:{
              tipocombustible:{
                select:{
                  tipo_de_combustible:true,
                }
              },
            },
          },
          imagen:true,
        }
      });
    }catch (error) {
      console.log(error);
    }
  }
}

module.exports = carService;