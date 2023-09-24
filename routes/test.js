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
router.post('/', async (req, res) => {
    const test = new Test({
        name: req.body.name,
        age: req.body.age
    });

    try {
        const newTest = await test.save();
        res.status(201).json(newTest);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// Update one
router.patch('/:id', (req, res) => {

});

// Delete one
router.delete('/:id', (req, res) => {

});

module.exports = router;