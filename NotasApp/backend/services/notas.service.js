const { getNotasRepository, agregarNotaRepository, getNotaByIdRepository, eliminarNotaRepository, actualizarNotaRepository } = require("../repository/notas.repository.js");

// Aca traemos todas nuestras notas
exports.getNotasService = async () => {
    try {
        return getNotasRepository()
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber los datos')
    }
}
// Aca traemos una nota por id 
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

// Aca eliminamos una nota

exports.eliminarNotaService = async (id) => {
    try {
        const notaEliminada = await eliminarNotaRepository(id)
    return notaEliminada

    } catch (error) {
        console.error('Error en el service', error)
        throw new Error('Error al eliminar la nota')
    }
}

// Aca actualizamos las notas
exports.actualizarNotaService = async (id, nota) => {
    try {
        const notaActualizada = await actualizarNotaRepository(id, nota);
        return notaActualizada
    } catch (error) {
        console.error('Error en el service', error)
        throw new Error('Error al actualzar la nota')
    }
}