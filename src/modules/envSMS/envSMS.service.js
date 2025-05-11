const prisma = require('../../config/prisma');

const envSMSService = {
    async findByHostId(id_host) {
        try {
            console.log('ID del host recibido desde el controlador:', id_host);
            return await prisma.notificaion_confirmacion.findFirst({
                where: { id_host },
                orderBy: { id: 'desc' },
                select: {
                    mensaje: true,
                    estado: true,
                    id_renter: true,
                    id_host: true,
                    fecha: true,
                    id: true,
                },
            });
        } catch (error) {
            console.error('Error en el servicio:', error);
            throw new Error('Error al buscar la notificación');
        }
    },
};

module.exports = envSMSService;