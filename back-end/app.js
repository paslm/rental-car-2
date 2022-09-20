const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
const Car = require("./models/Car")

const connections = require('./connections')


mongoose.connect(`mongodb+srv://${connections.userName}:${connections.securedPassword}@sandbox.btv1g.mongodb.net/?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "rental-car"
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(bodyParser.json())



app.use('/rental-car/cars', (req, res, next) => {
   const stuff = [
     {
       _id: 'oeihfzeoi',
       title: 'Mon premier objet',
       description: 'Les infos de mon premier objet',
       imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
       price: 4900,
       userId: 'qsomihvqios',
     },
     {
       _id: 'oeihfzeomoihi',
       title: 'Mon deuxième objet',
       description: 'Les infos de mon deuxième objet',
       imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
       price: 2900,
       userId: 'qsomihvqios',
     },
   ];
   res.status(200).json(stuff);
   let i = 1
   console.log("I've been triggered")
 });

 app.post('/rental-car/car', (req, res, next) => {
  // delete req.body_id;
  console.log(req.body)
  const car = new Car({
  ...req.body
  });
  car.save()
  .then(() => res.status(201).json({message: "Car saved"}))
  .catch( error => res.status(400).json({error}))
});

module.exports = app;