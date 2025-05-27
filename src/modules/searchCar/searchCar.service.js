const prisma = require('../../config/prisma');

const findAll = async () => {
  try {
    const carros = await prisma.carro.findMany({
      select: {
        id: true,
        modelo: true,
        marca: true,
        asientos: true,
        puertas: true,
        transmicion: true,
        precio_por_dia: true,
        a_o: true,
        CombustibleCarro: {
          select: {
            TipoCombustible: {
              select: {
                tipoDeCombustible: true,
              },
            },
          },
        },
        estado: true,
        Usuario: {
          select: {
            nombre: true,
          },
        },
        Direccion: {
          select: {
            calle: true,
            latitud: true,
            longitud: true,
            Provincia: {
              select: {
                Ciudad: {
                  select: {
                    nombre: true,
                  },
                },
              },
            },
          },
        },
        Imagen: {
          take: 1,
          orderBy: {
            id: 'asc',
          },
          select: {
            id: true,
            data: true,
            id_carro: true,
          },
        },
        caracteristicasAdicionalesCarro: {
          select: {
            CarasteristicasAdicionales: {
              select: {
                nombre: true,
              },
            },
          },
        },
        Reserva: {
          select: {
            fecha_inicio: true,
            fecha_fin: true,
            estado: true,
          },
        },
      },
    });

    // Procesar características adicionales para cada carro
    const carrosTransformados = carros.map(carro => {
      const caracteristicas = carro.caracteristicasAdicionalesCarro.map(
        item => item.CarasteristicasAdicionales.nombre
      );

      return {
        ...carro,
        caracteristicasAdicionales: caracteristicas,
        caracteristicasAdicionalesCarro: undefined, // Eliminamos esta propiedad para limpiar el objeto
      };
    });

    return carrosTransformados;
  } catch (error) {
    console.error('Error al obtener los carros:', error);
    return [];
  }
};

module.exports = { findAll };
