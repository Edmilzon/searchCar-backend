const prisma=require('../../config/prisma');

const ordenarTodo=async(query)=>{
    const {ordenar}=query;

    let ordenamiento=undefined;

    if(ordenar==='precio_asc'){
        ordenamiento={precio_por_dia: 'asc'};
    }else if(ordenar==='precio_desc'){
        ordenamiento={precio_por_dia: 'desc'}
    }else if(ordenar==='modelo_asc'){
        ordenamiento={modelo:'asc'}
    }else if(ordenar==='modelo_desc'){
        ordenamiento={modelo:'desc'}
    }

    return prisma.carro.findMany({
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
            },
            },
            estado:true,
            usuario_rol:{
                select:{
                    usuario:{
                        select:{
                            nombre:true,
                        }
                    },
                },
            },
            direccion: {
                select:{
                    calle:true,
                    zona:true,
                    num_casa:true,
                    provincia:{
                        select:{
                            nombre:true,
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
        },
        orderBy: ordenamiento,
    });
};

module.exports={ordenarTodo};