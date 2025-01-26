const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    tokenNumber: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    beneficiary: { type: mongoose.Schema.Types.ObjectId, ref: 'Beneficiary', required: true },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Token', tokenSchema);
