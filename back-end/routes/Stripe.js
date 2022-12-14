const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51MD8xKGItFVq9FbgIs9Fyp4dEa6dHlC9ROpQgcjEyAiBdGfUWUZH99u2PSpGX0zZsrP8I8v9gEJ8I8Yt9jkCOxwC00ADj2Ba3H');




const YOUR_DOMAIN = 'http://localhost:4200';

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
      line_items: [
          {
          
          quantity: req.body.quantity,
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price_data: {
            
          currency: "CAD",
          unit_amount: req.body.price * 100,
          tax_behavior: "inclusive",
          product_data: {
              name: `Rental of ${req.body.name}`
              
          }
        },
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cancelled`,
    automatic_tax: {enabled: true},
  })
    // .then((data) => {res.status(201).json({message: data.status})})
    // .catch((error) => { res.status(400).json({message: error})})
    // res.redirect(201, session.url);
    // res.status(201).redirect(session.url)
    res.status(201).json({url: session.url}) // <-- this is the changed line


});



module.exports = router