const express = require('express');
const router = express.Router();
const Arbitro = require('../models/Arbitro');

// Crear un árbitro
router.post('/', async (req, res) => {
    try {
        const nuevoArbitro = new Arbitro(req.body);
        const arbitroGuardado = await nuevoArbitro.save();
        res.status(201).json(arbitroGuardado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Obtener todos los árbitros
router.get('/', async (req, res) => {
    try {
        const arbitros = await Arbitro.find();
        res.json(arbitros);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
