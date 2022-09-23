const express = require('express');
const router = express.Router();
const Car = require('../models/Car')


// GET ALL
router.get('/', (req, res, next) => {

  Car.find()
    .then(cars => res.status(200).json(cars))
    .catch( error => res.status(400).json({error}))
});


// GET ONE

router.get('/:id', (req, res, next) => {

  Car.findOne({_id: req.params.id})
    .then(car => res.status(200).json(car))
    .catch( error => res.status(400).json({error}))
});

// POST

router.post('/', (req, res, next) => {
  // console.log(req.body)
  const car = new Car({
    name: req.body.name,
    ppday: req.body.ppday,
    picpath: req.body.picpath,
    availableOrNot: req.body.avalaibleOrNot
    
  });
  car.save()
    .then(() => {res.status(201).json({message: 'Car saved in DataBase'})})
    .catch((error) => { res.status(400).json({   error: error   }); });
});


//UPDATE
router.put(  '/:id', (req, res, next) => {

  const car = new Car (
    {
      _id: req.params.id,
      name: req.body.name,
      ppday: req.body.ppday,
      picpath: req.body.picpath,
      availableOrNot: req.body.avalaibleOrNot
    }
  )
  
  Car.updateOne({_id: req.params.id}, car)
    .then(() => { res.status(201).json({message: `The Car ${car.id} has been safely updated`})})
    .catch((error) => { res.status(400).json({   error: error   }); });

})  


// DELETE
router.delete('/:id', (req, res, next) => {
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
});



module.exports = router;