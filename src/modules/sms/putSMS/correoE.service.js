const prisma = require('../../../config/prisma')

const updateEstado = async (id, estado) => {
    try {
        return await prisma.notificaion_confirmacion.update({
            where: {id: parseInt(id)},
            data: {estado: estado}
        })
    } catch (error) {
        console.error('Error al actualizar el estado:', error);
        throw new Error('Error al actualizar el estado de la notificación');
    }
}

module.exports={updateEstado}