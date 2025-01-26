const express = require('express');
const Beneficiary = require('../models/Beneficiary');

const router = express.Router();

// Get dashboard stats
router.get('/dashboard', async (req, res) => {
    try {
        const totalBeneficiaries = await Beneficiary.countDocuments();
        res.json({ totalBeneficiaries });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
