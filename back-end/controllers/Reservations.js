const Reservation = require('../models/Reservation')
const Car = require('../models/Car')
const mongoose = require('mongoose')
const toId = mongoose.Types.ObjectId


exports.getAllReservations = () => {
    Reservation.find()
        .then(reservations => res.status(200).json(reservations))
        .catch(error => res.status(400).json({error}))

}

exports.createReservation = (req, res, next) => {
    const car = Car.findById(req.body.car_id)
    const carPrice = car.ppday * req.body.duration
    const carId = toId(req.body.car_id)

    // Load price variable here


    const reservation = new Reservation({
        car_id: carId,
        user_id: req.body.user_id,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        duration: req.body.duration,
        resPrice: req.body.resPrice

      });

     
      reservation.save()
      .then((data) => {res.status(201).json({car: data})})
      .catch((error) => { res.status(400).json({   error: error   }); });
    
      
}   