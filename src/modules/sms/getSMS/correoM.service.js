const prisma = require('../../../config/prisma');

const findAll = async (hostId) => {
    try {
        return await prisma.notificaion_confirmacion.findMany({
            where: {id_host: hostId},
            select: {
                id: true,
                mensaje: true,
                fecha: true,
                estado: true,
                id_renter: true,
                id_host: true,
            }
        })        
    } catch (error) {
        console.error('Error al obtener las notificaciones:', error);
        throw new Error('Error al obtener las notificaciones');
    }
}

module.exports = {findAll}