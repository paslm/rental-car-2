const express = require('express');
const router = express.Router();
const Car = require('../models/Car')
const carCtrl = require('../controllers/car')

// GET ALL
router.get('/', carCtrl.getAllCars );


// GET ONE

router.get('/:id', carCtrl.getOneCar);

// POST

router.post('/', carCtrl.createCar);


//UPDATE
router.put(  '/:id', carCtrl.updateCar)  


// DELETE
router.delete('/:id', carCtrl.deleteOneCar );



module.exports = router;