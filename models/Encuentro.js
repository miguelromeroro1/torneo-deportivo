const mongoose = require('mongoose');

const EncuentroSchema = new mongoose.Schema({
    equipo1: { type: String, required: true },
    equipo2: { type: String, required: true },
    fecha: { type: Date, required: true },
    lugar: { type: String, required: true },
    arbitro: { type: mongoose.Schema.Types.ObjectId, ref: 'Arbitro' },
    resultado: {
        equipo1Puntos: { type: Number, default: 0 },
        equipo2Puntos: { type: Number, default: 0 },
    },
});

module.exports = mongoose.model('Encuentro', EncuentroSchema);
