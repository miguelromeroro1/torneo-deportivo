const express = require('express');
const router = express.Router();
const Deportista = require('../models/Deportista'); // Importa el modelo

// Crear un nuevo deportista
router.post('/', async (req, res) => {
    try {
        const nuevoDeportista = new Deportista(req.body);
        const deportistaGuardado = await nuevoDeportista.save();
        res.status(201).json(deportistaGuardado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Obtener todos los deportistas
router.get('/', async (req, res) => {
    try {
        const deportistas = await Deportista.find();
        res.json(deportistas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
