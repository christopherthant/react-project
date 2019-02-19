var express = require('express');
var router = express.Router();
var path = require('path');

var Payment = require('../models/payment');

/* GET home page. */
router.get('/*', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.post('/', function (req, res, next) {
    console.log('payment data recieved', req.body);

    const payment = new Payment(req.body);

    payment.save((err) => {
        console.log(arguments);
        if (err) {
            console.log('Payment err', err);
            res.status(400).send('Bad Request');
        } else {
            console.log('payment saved');
            res.status(200).send('Payment Saved');
        }

    });
});
module.exports = router;
