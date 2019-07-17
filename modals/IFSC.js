const mongoose = require('mongoose');

const IFSCSchema = new mongoose.Schema({
    BANK: String,
    IFSC: String,
    BRANCH: String,
    ADDRESS: String,
    CONTACT: String,
    CITY: String,
    DISTRICT: String,
    STATE: String
});

module.exports = IFSC = mongoose.model('ifsc',IFSCSchema);