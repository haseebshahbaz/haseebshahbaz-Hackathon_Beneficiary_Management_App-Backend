const express = require('express');
const Token = require('../models/Token');

const router = express.Router();

// Generate a new token
router.post('/', async (req, res) => {
    const { tokenNumber, department, beneficiary } = req.body;

    try {
        const token = new Token({ tokenNumber, department, beneficiary });
        const savedToken = await token.save();
        res.status(201).json(savedToken);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
