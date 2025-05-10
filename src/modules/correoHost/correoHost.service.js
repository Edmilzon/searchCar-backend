const { PrismaClient } = require('@prisma/client');
const { enviarCorreo, crearMensaje } = require('./notifications');

const prisma = new PrismaClient();

async function envCorreoHost(data) {
    const { renterEmail, hostEmail, subject, id_renter, id_host } = data;

    const mensaje = crearMensaje(renterEmail, hostEmail, subject);

    try {
        // Enviar el correo
        await enviarCorreo(renterEmail, hostEmail, subject);

        // Crear la notificación en la base de datos
        const notificacion = await prisma.notificaion_confirmacion.create({
            data: {
                mensaje,
                estado: true,
                id_renter,
                id_host,
            },
        });

        return notificacion;
    } catch (error) {
        console.error('Error al enviar el correo o guardar la notificación:', error);
        throw new Error('Error al procesar la solicitud');
    }
}

module.exports = {
    envCorreoHost,
};