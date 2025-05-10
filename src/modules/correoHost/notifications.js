const nodemailer = require('nodemailer');
const oAuth2Client = require('../../config/gmailClient');

// Crear el mensaje
function crearMensaje(renterEmail, hostEmail, subject) {
  return `Hola ${hostEmail},\n\n${renterEmail} ha solicitado alquilar tu auto.\n\nGracias,\nEl equipo de alquiler de autos`;
}

// Enviar el correo usando Gmail API
async function enviarCorreo(renterEmail, hostEmail, subject) {
  const mensaje = crearMensaje(renterEmail, hostEmail, subject);

  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'edmilzon.luna@gmail.com',
        clientId: oAuth2Client._clientId,
        clientSecret: oAuth2Client._clientSecret,
        refreshToken: oAuth2Client.credentials.refresh_token,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: renterEmail, // El correo del renter como remitente
      to: hostEmail, // El correo del host como destinatario
      subject: subject,
      text: mensaje,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Correo enviado del renter al host:', result);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw new Error('Error al enviar el correo');
  }
}

module.exports = {
  enviarCorreo,
  crearMensaje,
};