const { getNotasRepository, agregarNotaRepository } = require("../repository/notas.repository.js");

// Aca traemos todas nuestras notas
exports.getNotasService = async () => {
    try {
        return getNotasRepository()
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber los datos')
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