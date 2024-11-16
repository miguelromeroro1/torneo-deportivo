const mongoose = require('mongoose');
const Arbitro = require('./models/Arbitro'); // Asegúrate de que el modelo está correctamente importado

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error(err));

const insertarArbitros = async () => {
    try {
        const arbitros = await Arbitro.insertMany([
            {
                "nombre": "Antonio Mateu Lahoz",
                "experiencia": 15,
                "partidosDirigidos": 300
            },
            {
                "nombre": "Michael Oliver",
                "experiencia": 12,
                "partidosDirigidos": 250
            },
            {
                "nombre": "Daniele Orsato",
                "experiencia": 14,
                "partidosDirigidos": 280
            }
        ]);
        console.log('Árbitros insertados:', arbitros);
        mongoose.connection.close();
    } catch (err) {
        console.error('Error al insertar árbitros:', err);
        mongoose.connection.close();
    }
};

insertarArbitros();
