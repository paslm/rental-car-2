const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const resCtrl = require('../controllers/Reservations');


router.get('/reservations', resCtrl.getAllReservations);
router.post('/reservations', resCtrl.createReservation);


module.exports = router;