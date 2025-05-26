
const { sendEmail } = require('./conf');

function createRenterMessage(data) {
  return `
    <h1 style="color: black;">¡Solicitud enviada con éxito!</h1>
    <p style="color: black;">Hola <strong>${data.renterNombre}</strong>,</p>
    <p style="color: black;">
      Tu solicitud para el auto <strong>${data.modelo} (${data.marca})</strong> fue enviada correctamente al host <strong>${data.hostNombre}</strong>.
    </p>
    <table border="1" style="border-collapse: collapse; width: 100%; color: black;">
      <tr>
        <th>Precio</th>
        <td>BOB ${data.precio} por día</td>
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
    <p style="color: black;">Te avisaremos cuando el host responda tu solicitud.</p>
  `;
}

async function sendRenterNotification({ renterEmail, hostEmail, data }) {
  const message = createRenterMessage(data);
  return sendEmail({
    from: hostEmail,
    to: renterEmail,
    subject: 'Notificación enviada con éxito',
    html: message
  });
}

module.exports = { sendRenterNotification };