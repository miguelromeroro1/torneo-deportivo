const mongoose = require('mongoose');

const ArbitroSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    experiencia: { type: Number, required: true },
    partidosDirigidos: { type: Number, default: 0 },
});

module.exports = mongoose.model('Arbitro', ArbitroSchema);
