const { PrismaClient } = require('@prisma/client');
const { enviarCorreoHost, crearMensajeHost, enviarCorreoRenter, crearMensajeRenter } = require('./notifications');

const prisma = new PrismaClient();

async function envCorreoHost(data) {
    const {
        fecha,
        hostNombre,
        renterNombre,
        modelo,
        marca,
        precio,
        fechaRecogida,
        fechaDevolucion,
        lugarRecogida,
        lugarDevolucion,
        renterEmail,
        hostEmail,
        id_renter,
        id_host,
    } = data;

    // Crear el mensaje con los datos proporcionados
    const mensaje = crearMensajeHost({
        fecha,
        hostNombre,
        renterNombre,
        modelo,
        marca,
        precio,
        fechaRecogida,
        fechaDevolucion,
        lugarRecogida,
        lugarDevolucion,
    });

    try {
        // Enviar el correo
        await enviarCorreoHost({
            renterEmail,
            hostEmail,
            mensaje,
        });

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

async function envCorreoRenter(data) {
    const {
        fecha,
        hostNombre,
        renterNombre,
        modelo,
        marca,
        precio,
        fechaRecogida,
        fechaDevolucion,
        lugarRecogida,
        lugarDevolucion,
        renterEmail,
        hostEmail,
        id_renter,
        id_host,
    } = data;

    // Crear el mensaje con los datos proporcionados
    const mensaje = crearMensajeRenter({
        fecha,
        hostNombre,
        renterNombre,
        modelo,
        marca,
        precio,
        fechaRecogida,
        fechaDevolucion,
        lugarRecogida,
        lugarDevolucion,
    });

    try {
        // Enviar el correo
        await enviarCorreoRenter({
            renterEmail,
            hostEmail,
            mensaje,
        });

        return {'mensaje': 'Correo enviado al renter con éxito' };
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw new Error('Error al procesar la solicitud');
    }
}

module.exports = {
    envCorreoHost,
    envCorreoRenter,
};