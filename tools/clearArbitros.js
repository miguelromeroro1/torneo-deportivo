const mongoose = require('mongoose');
const Arbitro = require('../models/Arbitro');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error(err));

const clearArbitros = async () => {
    try {
        await Arbitro.deleteMany({});
        console.log('Todos los documentos en la colección "arbitros" han sido eliminados');
        mongoose.connection.close();
    } catch (err) {
        console.error('Error al eliminar los documentos:', err);
        mongoose.connection.close();
    }
};

clearArbitros();
