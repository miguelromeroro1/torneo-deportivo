const express = require('express');
const router = express.Router();
const Encuentro = require('../models/Encuentro');

// Crear un encuentro
router.post('/', async (req, res) => {
    try {
        const nuevoEncuentro = new Encuentro(req.body);
        const encuentroGuardado = await nuevoEncuentro.save();
        res.status(201).json(encuentroGuardado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Obtener todos los encuentros
router.get('/', async (req, res) => {
    try {
        const encuentros = await Encuentro.find().populate('arbitro');
        res.json(encuentros);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
