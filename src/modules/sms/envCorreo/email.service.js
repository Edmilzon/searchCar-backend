const { sendHostNotification} = require('./formatCorreo/hostNotificacion');
const { sendRenterNotification } = require('./formatCorreo/renterNotificacion');

async function enviarCorreoHost(data) {
  
  const mensaje = await sendHostNotification({
    renterEmail: data.renterEmail,
    hostEmail: data.hostEmail,
    data:{
      ...data,
      notificaionId: data.notificaionId,
    }
  });
  return mensaje;
}

async function enviarCorreoRenter(data) {
  const mensaje = await sendRenterNotification({
    renterEmail: data.renterEmail,
    hostEmail: data.hostEmail,
    data
  });
  return mensaje;
}

module.exports = {
  enviarCorreoHost,
  enviarCorreoRenter
};