const prisma = require('../../../config/prisma')

const updateEstado = async (id, estado) => {
    try {
        const notificacionVer = await prisma.notificaion_confirmacion.findUnique({
            where: {id: Number(id)}
        })

        if (!notificacionVer) {
            throw new Error('Notificación no encontrada')
        }

        if(notificacionVer.estado !== null){
            throw new Error('La notificacion ya fue respondida')
        }

        return await prisma.notificaion_confirmacion.update({
            where: {id: Number(id)},
            data: {estado: estado}
        })
    } catch (error) {
        console.error('Error al actualizar el estado:', error);
        throw new Error('Error al actualizar el estado de la notificación');
    }
}

module.exports={updateEstado}