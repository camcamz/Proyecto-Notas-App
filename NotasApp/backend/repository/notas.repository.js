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



// Aca agregamos nueva nota
exports.agregarNotaRepository = async (nuevaNota) => {
    try {
    const notaNueva = new Notas(nuevaNota)

    await notaNueva.save()
    
    console.log(notaNueva)

    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error al agregar nueva nota')
    }

}
// Aca eliminamos una nota
exports.eliminarNotaRepository = async (id) => {

    try {
        const notaEliminada = await Notas.findByIdAndDelete(id)
        if(!notaEliminada) {
            console.log('Nota no encontrado');
        }else {
            console.log('Se eliminó la siguiente nota de la lista')
            return notaEliminada
        }
    } catch (error) {
        console.error('Error en el repositorio', error)
        throw new Error('Error al eliminar la nota de la base de datos')
    }
}

// Aca actualizamos una nota
exports.actualizarNotaRepository = async (id, nota) => {
    try {
        const notaActualizada = await Notas.findByIdAndUpdate(id, nota, { new: true })

        if(!notaActualizada) {
            console.log('Nota no encontrada');
            return null
        }else {
            return notaActualizada
        }
    } catch (error) {
        console.error('Error en el repositorio: ', error)
        throw new Error("Error al actualziar la nota");
    }
}

