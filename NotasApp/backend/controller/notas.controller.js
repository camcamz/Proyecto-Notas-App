const { getNotasService, agregarNotaService, getNotaByIdService, eliminarNotaService, updateNotaService, actualizarNotaService} = require("../services/notas.service.js")

// Aca traemos todas las notas
exports.readNotasController = async (req, res) => {
    try {
        let notas = await getNotasService()
        notas.length === 0 ? res.send('La base de datos está vacía') : res.send(notas)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener las notas' })
    }
}


// Aca trae una nota por id
exports.readNotaByIdController = async (req, res) => {
    const {id}= req.params
    console.log("idCONTROLLER ",id)
    
    try {
        const notaEncontrada = await getNotaByIdService(id)

        if(!notaEncontrada) {
            return res.status(404).send({mensaje: `No se encotró ninguna nota con ID ${id}`})
        }
        res.status(200).send(notaEncontrada)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener las notas' })
    }
}


// Aca agregar nueva nota
exports.createNotaController = async (req, res) => {
    const { titulo, descripcion, completada, creada } = req.body
    
    if (titulo == null || completada == null){
        res.status(400).send({ message: 'Error en la solicitud, por favor llene todos los campos' })
    }
    try {
        const notaNueva = await agregarNotaService({titulo, descripcion, completada, creada })
        res.status(200).send({mensaje: 'Nota nueva agregada correctamente', Nota: notaNueva})
        } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al agregar la nota'})
        }
}

// Aca eliminamos una nota
exports.deleteNotaController = async (req, res) => {
    const {id}= req.params

    try {
        const notaEliminada = await eliminarNotaService(id)

        if(!notaEliminada) {
            return res.status(404).send({mensaje: `No se encotró ninguna nota con ID ${id}`})
        }

        res.status(200).send({mensaje: 'La nota ha sido eliminada correctamente', Nota: notaEliminada})
    } catch (error) {
        console.error(error)
        res.status(500).send({mensaje: 'Error al eliminar la nota'})
    }
};

// Aca actualizamos las notas
exports.updateNotaController = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, completada, creada } = req.body
    try {
        const notaActualizada = await actualizarNotaService(id, { titulo, descripcion, completada, creada });

        if(!notaActualizada) {
            return res.status(404).send({mensaje: `No se encontró la nota con el ID ${id}`})
        }

        res.status(200).send({
            mensaje: `La nota con el ID ${id} ha sido actualizado corerctamente`,
            notaActualizada
        })
        
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Error al actualizar la nota"})
    }
}