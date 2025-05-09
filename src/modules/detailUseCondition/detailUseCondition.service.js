const prisma = require('../../config/prisma')
const useConditions={
    async findById(id){
        try{
            console.log('Id recibido desde constroller',id);
            return await prisma.Carro.findUnique({
              where: { id },
              select: {
                    condiciones_uso:{
                        select:{
                            condiciones_generales:{
                                select:{
                                    edad_minima:true,
                                    edad_maxima:true,
                                    kilometraje_max_dia:true,
                                    fumar:true,
                                    mascota:true,
                                    dev_mismo_conb:true,
                                    uso_fuera_ciudad:true,
                                    multa_conductor:true,
                                    dev_mismo_lugar:true,
                                    uso_comercial:true
                                }
                            },
                            devolucion_auto:{
                                select:{
                                    interior_limpio:true,
                                    exterior_limpio:true,
                                    rayones:true,
                                    herramientas:true, 
                                    cobrar_da_os:true,
                                    combustible_igual:true,
                                }
                            },
                            entrega_auto:{
                                select:{
                                    estado_combustible:true,
                                    esterior_limpio:true,
                                    inter_limpio:true,
                                    rayones:true,
                                    llanta_estado:true,
                                    interior_da_o:true
                                }
                            }
                        }
                    }
                }
            });
          }catch (error) {
            console.log(error);
          }
    }
}
module.exports = useConditions ;