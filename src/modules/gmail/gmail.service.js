const prisma = require('../../config/prisma');

const findAll = async (hostId) => {
    try {
        return await prisma.Usuario.findUnique({
            where: {id : hostId},
            select : {
                id : true,
                nombre: true,
                correo: true
            }
        })
    } catch (error) {
        throw error;
    }
}

module.exports = {findAll}