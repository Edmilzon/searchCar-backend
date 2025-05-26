const { sendEmail } = require('./conf');

const {} = require('../../putSMS/correoE.service')

function createHostMessage(data) {
  return `
    <h1 style="color: black;">Solicitud de Reserva</h1>
    <p style="color: black;"><strong>Fecha:</strong> ${data.fecha}</p>
    <p style="color: black;"><strong>Host:</strong> ${data.hostNombre}</p>
    <p style="color: black;">El renter <strong>${data.renterNombre}</strong> solicita la renta del auto <strong>${data.modelo} (${data.marca})</strong>. A continuación, los detalles de la solicitud:</p>
    <table border="1" style="border-collapse: collapse; width: 100%; color: black;">
      <tr>
        <th>Precio</th>
        <td>BOB ${data.precio} por dia</td>
      </tr>
      <tr>
        <th>Fecha y hora de recogida</th>
        <td>${data.fechaRecogida}</td>
      </tr>
      <tr>
        <th>Fecha y hora de devolución</th>
        <td>${data.fechaDevolucion}</td>
      </tr>
      <tr>
        <th>Lugar de recogida</th>
        <td>${data.lugarRecogida}</td>
      </tr>
      <tr>
        <th>Lugar de devolución</th>
        <td>${data.lugarDevolucion}</td>
      </tr>
    </table>
    <br>
    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px; flex-wrap: wrap;">
      <a href="https://search-car-backend.vercel.app/correo/updateEstadoCorreo/123?estado=true" 
         style="background-color:rgb(7, 7, 7); color: white; padding: 10px 20px; border: none; text-decoration: none; cursor: pointer; margin: 5px; border-radius: 5px;">
         Aceptar
      </a>
      <a href="https://search-car-backend.vercel.app/correo/updateEstadoCorreo/123?estado=false" 
         style="background-color:rgb(0, 0, 0); color: white; padding: 10px 20px; border: none; text-decoration: none; cursor: pointer; margin: 5px; border-radius: 5px;">
         Rechazar
      </a>
    </div>
  `;
}

async function sendHostNotification({ renterEmail, hostEmail, data }) {
  const message = createHostMessage(data);
  await sendEmail({
    from: renterEmail,
    to: hostEmail,
    subject: 'Solicitud de Reserva',
    html: message
  });
  return message; 
}

module.exports = { sendHostNotification };