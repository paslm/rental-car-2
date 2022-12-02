const Car = require('../models/Car')

exports.getAllCars = (req, res, next) => {



  Car.find()
    .then(cars => res.status(200).json(cars))
    .catch( error => res.status(400).json({error}))

};

exports.createCar = (req, res, next) => {

    const car = new Car({
      name: req.body.name,
      ppday: req.body.ppday,
      picpath: req.body.picpath,
      availableOrNot: req.body.availableOrNot

    });

    car.save()

       .then(() => {res.status(201).json({message: 'Car saved in DataBase'})})
      .catch((error) => { res.status(400).json({   error: error   }); });

}
exports.getOneCar = (req, res, next) => {

  Car.findOne({_id: req.params.id})
    .then(car => res.status(200).json(car))
    .catch( error => res.status(400).json({error}))

};


exports.updateCar = (req, res, next) => {



  const car = new Car (

    {

    _id: req.params.id,
      name: req.body.name,
      ppday: req.body.ppday,
      picpath: req.body.picpath,
      availableOrNot: req.body.availableOrNot

    }

  )

   car.updateOne({_id: req.params.id}, car)
    .then(() => { res.status(201).json({message: `The Car ${car.id} has been safely updated`})})
    .catch((error) => { res.status(400).json({   error: error   }); });


}



exports.deleteOneCar = (req, res, next) => {
  Car.deleteOne({_id: req.params.id}).then(

    () => {

      res.status(200).json({
        message: 'Deleted!'

      });
    }

  ).catch(

    (error) => {
      res.status(400).json({
        error: error

      });
    }
  );
}

