const mongoose = require('mongoose');  // Mantén la sintaxis 'require'

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

const Notas = mongoose.model('Notas', notaSchema); // Declara el modelo como variable

module.exports = { Notas };  // Usa 'module.exports' para exportar