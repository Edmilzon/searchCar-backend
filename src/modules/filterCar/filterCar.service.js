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
        orderBy: ordenamiento,
    });
};

module.exports={ordenarTodo};