require('dotenv').config(); // Cargar variables de entorno desde el archivo .env
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // trabajar con datos JSON en las solicitudes

// Conexión a MongoDB
mongoose
    .connect(process.env.MONGO_URI) 
    .then(() => {
        console.log('Conexión exitosa a MongoDB');
    })
    .catch((err) => {
        console.error('Error al conectar a MongoDB:', err);
    });

// Ruta principal
app.get('/', (req, res) => {
    res.send('API del Torneo Deportivo funcionando correctamente');
});

// Arrancar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const Deportista = require('./models/Deportista');


const deportistasRoutes = require('./routes/deportistas');
const entrenadoresRoutes = require('./routes/entrenadores');
const arbitrosRoutes = require('./routes/arbitros');
const encuentrosRoutes = require('./routes/encuentros');

app.use('/api/deportistas', deportistasRoutes);
app.use('/api/entrenadores', entrenadoresRoutes);
app.use('/api/arbitros', arbitrosRoutes);
app.use('/api/encuentros', encuentrosRoutes);

