const { correoE, correoECorreo } = require('./correoE.controller');
const correoEService = require('./correoE.service');

module.exports = {
    controller: correoE,
    correoECorreoController: correoECorreo,
    service: correoEService
};