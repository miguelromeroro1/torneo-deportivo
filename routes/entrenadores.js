const express = require('express');
const router = express.Router();
const Entrenador = require('../models/Entrenador');

// Crear un entrenador
router.post('/', async (req, res) => {
    try {
        const nuevoEntrenador = new Entrenador(req.body);
        const entrenadorGuardado = await nuevoEntrenador.save();
        res.status(201).json(entrenadorGuardado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Obtener todos los entrenadores
router.get('/', async (req, res) => {
    try {
        const entrenadores = await Entrenador.find();
        res.json(entrenadores);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
