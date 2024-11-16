const mongoose = require('mongoose');

const DeportistaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    equipo: { type: String, required: true },
    posicion: { type: String, required: true },
});

module.exports = mongoose.model('Deportista', DeportistaSchema);
