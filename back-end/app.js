const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const carRoutes = require('./routes/Car');

const connections = require('./connections');


mongoose.connect(`mongodb+srv://${connections.userName}:${connections.securedPassword}@sandbox.btv1g.mongodb.net/?retryWrites=true&w=majority`,
{ useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "rental-car"
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(bodyParser.json())


app.use('/rental-car', carRoutes);



module.exports = app;