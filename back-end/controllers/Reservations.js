const Reservation = require('../models/Reservation')
const Car = require('../models/Car')

exports.getAllReservations = () => {
    Reservation.find()
        .then(reservations => res.status(200).json(reservations))
        .catch(error => res.status(400).json({error}))
}

exports.createReservation = (req, res, next) => {

    car = Car.findOne({_id: req.params.id})

    const reservation = new Reservation({
        car_id: car.id,
        start_time: req.body.start_time,
        end_time: req.body.end_time
      });
      
      reservation.save()
      .then(() => {res.status(201).json({message: 'Reservation saved in DataBase'})})
      .catch((error) => { res.status(400).json({   error: error   }); });

}