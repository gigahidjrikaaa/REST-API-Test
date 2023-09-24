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
router.get('/:id', getTestData, (req, res) => {
    res.send(res.test);
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
router.patch('/:id', getTestData, async (req, res) => {

});

// Delete one
router.delete('/:id', getTestData, async (req, res) => {
    try {
        await res.test.deleteOne();
        res.json({message: 'Deleted test'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

async function getTestData(req, res, next) {
    let test;
    try {
        test = await Test.findById(req.params.id);
        if (test == null) {
            return res.status(404).json({message: 'Cannot find test'});
        }
    } catch (err) {
        return res.status(500).json({message: err.message});
    }

    res.test = test;
    next();
}

module.exports = router;