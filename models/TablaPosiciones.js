const mongoose = require('mongoose');

const TablaPosicionesSchema = new mongoose.Schema({
    equipo: { type: String, required: true },
    partidosJugados: { type: Number, default: 0 },
    victorias: { type: Number, default: 0 },
    derrotas: { type: Number, default: 0 },
    empates: { type: Number, default: 0 },
    puntos: { type: Number, default: 0 },
});

module.exports = mongoose.model('TablaPosiciones', TablaPosicionesSchema);
