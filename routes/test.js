const express = require('express');
const router = express.Router();
const Test = require('../models/test');

// Get all
router.get('/', async (req, res) => {
    try {
        const tests = await Test.find();
        res.json(tests);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Get one
router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

// Create one
router.post('/', (req, res) => {

});

// Update one
router.patch('/:id', (req, res) => {

});

// Delete one
router.delete('/:id', (req, res) => {

});

module.exports = router;