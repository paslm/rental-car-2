const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const carRoutes = require('./routes/Car');
const resRoutes = require('./routes/Reservation')
const stripeRoutes = require('./routes/Stripe')
const connections = require('./connections')


mongoose.connect(`mongodb+srv://${connections.userName}:${connections.securedPassword}@sandbox.btv1g.mongodb.net/?retryWrites=true&w=majority`,
{ useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "rental-car"
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((error) => console.log(error));


const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(bodyParser.json())


app.use('/rental-car', carRoutes);
app.use('/rental-car', resRoutes)
app.use('/rental-car', stripeRoutes)



module.exports = app;