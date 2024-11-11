const { Notas } = require("./models/nota.model.js")
const { conectarMongoDB } = require("../database/db.config.js")

conectarMongoDB()

// Aca traemos todas nuestras notas
exports.getNotasRepository = async () => {
    try {
        const notas = await Notas.find();

        console.log(notas)

        return notas

    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
    }
}

// Aca traemos una nota
exports.getNotaByIdRepository = async (id) => {
    try {
        const notaEncontrada = await Notas.findById(id);
        if(notaEncontrada.length == 0) {
            console.log("Nota no encontrado");
        }else {
            return notaEncontrada
        }

        return notaEncontrada

    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } 
}



// agregamos nueva nota
exports.agregarNotaRepository = async (nuevaNota) => {
    try {
    const notaNueva = new Notas(nuevaNota)
    await notaNueva.save()
    console.log(notaNueva)

    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error al agregar nueva nota')
    } finally {
    }

}