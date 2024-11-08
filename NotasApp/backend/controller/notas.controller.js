const { getNotasService, agregarNotaService} = require("../services/notas.service.js")

// trae todas las notas
exports.readNotasController = async (req, res) => {
    try {
        let notas = await getNotasService()
        notas.length === 0 ? res.send('La base de datos está vacía') : res.send(notas)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener las notas' })
    }
}
// agregar nueva nota
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