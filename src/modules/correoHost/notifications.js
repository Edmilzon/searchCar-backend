const nodemailer = require('nodemailer');

function crearMensaje(datos) {
  return `
    <h1 style="color: black;">Solicitud de Reserva</h1>
    <p style="color: black;"><strong>Fecha:</strong> ${datos.fecha}</p>
    <p style="color: black;"><strong>Host:</strong> ${datos.hostNombre}</p>
    <p style="color: black;">El renter <strong>${datos.renterNombre}</strong> solicita la renta del auto <strong>${datos.modelo} (${datos.marca})</strong>. A continuación, los detalles de la solicitud:</p>
    <table border="1" style="border-collapse: collapse; width: 100%; color: black;">
      <tr>
        <th>Precio</th>
        <td>BOB ${datos.precio} por dia</td>
      </tr>
      <tr>
        <th>Fecha y hora de recogida</th>
        <td>${datos.fechaRecogida}</td>
      </tr>
      <tr>
        <th>Fecha y hora de devolución</th>
        <td>${datos.fechaDevolucion}</td>
      </tr>
      <tr>
        <th>Lugar de recogida</th>
        <td>${datos.lugarRecogida}</td>
      </tr>
      <tr>
        <th>Lugar de devolución</th>
        <td>${datos.lugarDevolucion}</td>
      </tr>
    </table>
    <br>
    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px; flex-wrap: wrap;">
      <button style="background-color: rgb(168, 168, 168); color: white; padding: 10px 20px; border: none; cursor: pointer; margin: 5px;">Aceptar</button>
      <button style="background-color:rgb(168, 168, 168); color: white; padding: 10px 20px; border: none; cursor: pointer; margin: 5px;">Rechazar</button>
    </div>
  `;
}

async function enviarCorreo({ renterEmail, hostEmail, mensaje }) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'edmilzon.luna@gmail.com',
        pass: 'nbzv tvnd uody qswc',
      },
    });

    const mailOptions = {
      from: renterEmail,
      to: hostEmail,
      subject: 'Solicitud de Reserva',
      html: mensaje,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Correo enviado del host al renter:', result);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw new Error('Error al enviar el correo');
  }
}

module.exports = {
  enviarCorreo,
  crearMensaje,
};