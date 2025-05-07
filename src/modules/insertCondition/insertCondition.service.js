const prisma = require('../../config/prisma');

const carroService = {
  async addConditionsToCar(data) {
    const { id_carro, condiciones_uso } = data;

    // Verifica si el carro existe
    const carro = await prisma.carro.findUnique({
      where: { id: id_carro }
    });

    if (!carro) {
      throw new Error(`El carro con ID ${id_carro} no existe.`);
    }

    // Crea las condiciones generales
    const condicionesGenerales = await prisma.condiciones_generales.create({
      data: condiciones_uso.condiciones_generales
    });

    // Crea la entrega del auto
    const entregaAuto = await prisma.entrega_auto.create({
      data: {
        ...condiciones_uso.entrega_auto,
        herramientas_basicas: {
          create: condiciones_uso.entrega_auto.herramientas_basicas
        }
      }
    });

    // Crea la devolución del auto
    const devolucionAuto = await prisma.devolucion_auto.create({
      data: condiciones_uso.devolucion_auto
    });

    // Crea las condiciones de uso y asócialas al carro
    const condicionesUso = await prisma.condiciones_uso.create({
      data: {
        id_condiciones_generales: condicionesGenerales.id,
        id_entrega_auto: entregaAuto.id,
        id_devolucion_auto: devolucionAuto.id,
        Carro: {
          connect: { id: id_carro }
        }
      }
    });

    return condicionesUso;
  }
};

module.exports = carroService;