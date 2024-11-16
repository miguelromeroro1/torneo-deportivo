const mongoose = require('mongoose');
const Deportista = require('./models/Deportista');
const Entrenador = require('./models/Entrenador');
const Arbitro = require('./models/Arbitro');
const Encuentro = require('./models/Encuentro');
const TablaPosiciones = require('./models/TablaPosiciones');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error(err));

const seedDatabase = async () => {
    try {
        // Eliminar documentos existentes en cada colección
        await Deportista.deleteMany({});
        console.log('Colección "deportistas" limpiada');

        await Entrenador.deleteMany({});
        console.log('Colección "entrenadores" limpiada');

        await Arbitro.deleteMany({});
        console.log('Colección "arbitros" limpiada');

        await Encuentro.deleteMany({});
        console.log('Colección "encuentros" limpiada');

        await TablaPosiciones.deleteMany({});
        console.log('Colección "tablaPosiciones" limpiada');

        // Insertar nuevos datos
        await Deportista.insertMany([
            {
                "nombre": "Karim Benzema",
                "edad": 35,
                "equipo": "Real Madrid",
                "posicion": "Delantero"
            },
            {
                "nombre": "Kevin De Bruyne",
                "edad": 31,
                "equipo": "Manchester City",
                "posicion": "Centrocampista"
            },
            {
                "nombre": "Robert Lewandowski",
                "edad": 34,
                "equipo": "FC Barcelona",
                "posicion": "Delantero"
            },
            {
                "nombre": "Thomas Müller",
                "edad": 33,
                "equipo": "Bayern Múnich",
                "posicion": "Centrocampista"
            }
        ]);
        console.log('Datos insertados en "deportistas"');

        await Entrenador.insertMany([
            {
                "nombre": "Carlo Ancelotti",
                "equipo": "Real Madrid",
                "experiencia": 25
            },
            {
                "nombre": "Pep Guardiola",
                "equipo": "Manchester City",
                "experiencia": 20
            },
            {
                "nombre": "Xavi Hernández",
                "equipo": "FC Barcelona",
                "experiencia": 5
            },
            {
                "nombre": "Thomas Tuchel",
                "equipo": "Bayern Múnich",
                "experiencia": 10
            }
        ]);
        console.log('Datos insertados en "entrenadores"');

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
        console.log('Datos insertados en "arbitros":', arbitros);

        // Usa los ObjectId generados para los árbitros
        await Encuentro.insertMany([
            {
                "equipo1": "Real Madrid",
                "equipo2": "Manchester City",
                "fecha": "2024-04-15",
                "lugar": "Santiago Bernabéu",
                "arbitro": arbitros[0]._id, // Primer árbitro
                "resultado": {
                    "equipo1Puntos": 2,
                    "equipo2Puntos": 3
                }
            },
            {
                "equipo1": "FC Barcelona",
                "equipo2": "Bayern Múnich",
                "fecha": "2024-04-16",
                "lugar": "Camp Nou",
                "arbitro": arbitros[1]._id, // Segundo árbitro
                "resultado": {
                    "equipo1Puntos": 1,
                    "equipo2Puntos": 1
                }
            }
        ]);
        console.log('Datos insertados en "encuentros"');

        await TablaPosiciones.insertMany([
            {
                "equipo": "Manchester City",
                "partidosJugados": 3,
                "victorias": 3,
                "derrotas": 0,
                "empates": 0,
                "puntos": 9
            },
            {
                "equipo": "Real Madrid",
                "partidosJugados": 3,
                "victorias": 2,
                "derrotas": 1,
                "empates": 0,
                "puntos": 6
            },
            {
                "equipo": "Bayern Múnich",
                "partidosJugados": 3,
                "victorias": 1,
                "derrotas": 1,
                "empates": 1,
                "puntos": 4
            },
            {
                "equipo": "FC Barcelona",
                "partidosJugados": 3,
                "victorias": 0,
                "derrotas": 2,
                "empates": 1,
                "puntos": 1
            }
        ]);
        console.log('Datos insertados en "tablaPosiciones"');

    } catch (err) {
        console.error('Error al insertar datos:', err);
    } finally {
        mongoose.connection.close(); // Asegúrate de cerrar la conexión
    }
};

seedDatabase();
