const { getNotasRepository, agregarNotaRepository, getNotaByIdRepository } = require("../repository/notas.repository.js");

// Aca traemos todas nuestras notas
exports.getNotasService = async () => {
    try {
        return getNotasRepository()
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber los datos')
    }
}
// Aca traemos una nota
exports.getNotaByIdService = async (id) => {
    try {
        const notaEncontrada = await getNotaByIdRepository(id)
        return notaEncontrada;
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los datos')
    }
}

// aca agregamos una nueva nota
exports.agregarNotaService = async (nuevaNota) => {
    try {
        const notaNueva = await agregarNotaRepository(nuevaNota)

        return notaNueva
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al aregegar la nota')

    }
}