const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// payment document schema
const paymentSchema = new Schema({
    amount: Number,

    ccName: String,
    ccNumber: Number,
    ccCode: Number,
    ccExMo: Number,
    ccExYr: Number,

    firstName: String,
    lastName: String,
    company: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: Number
});

module.exports = mongoose.model('Payment', paymentSchema);