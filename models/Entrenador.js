const mongoose = require('mongoose');

const EntrenadorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    equipo: { type: String, required: true },
    experiencia: { type: Number, required: true },
});

module.exports = mongoose.model('Entrenador', EntrenadorSchema);
