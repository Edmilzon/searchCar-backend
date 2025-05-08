const prisma = require('../../config/prisma');
const seguroCarroService = {
  async agregarCredencial(data) {
    const {
      seguro,
      fechaInicio,
      fechaFin,
      id_carro,
      enlace
    } = data;
  
    const nuevoSeguro = await prisma.seguro.create({
      data: {
        empresa: seguro.empresa,
        nombre: seguro.nombre,
        tipoSeguro: seguro.tipoSeguro,
        valides: seguro.valides,
        descripcion: seguro.descripcion,
      },
    });

    const nuevoSeguroCarro = await prisma.seguroCarro.create({
      data: {
        fechaInicio: new Date(fechaInicio),
        fechaFin: new Date(fechaFin),
        id_carro,
        id_seguro: nuevoSeguro.id,
        enlace,
      },
    });

    const seguroCarroConSeguro = await prisma.seguroCarro.findUnique({
      where: {
        id: nuevoSeguroCarro.id, 
      },
      include: {
        Seguro: true, 
      },
    });

    return seguroCarroConSeguro;
  },

  async findAll() {
    return await prisma.seguroCarro.findMany({
      include: {
        Seguro: true, 
      },
    });
  }
};

module.exports = seguroCarroService;