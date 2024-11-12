const mongoose = require('mongoose');

const notaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    completada: {
        type: Boolean,
        required: true,
    },
    creada: {
        type: Date,
        default: Date.now,
    },
});

const Notas = mongoose.model('Notas', notaSchema);

module.exports = { Notas };