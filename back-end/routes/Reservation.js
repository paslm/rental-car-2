const express = require('express');
const router = express.Router();

const resCtrl = require('../controllers/Reservations');


router.get('/reservations', resCtrl.getAllReservations);
router.post('/reservation', resCtrl.createReservation);


module.exports = router;