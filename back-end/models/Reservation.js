const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    car_id: {type: String, required: true},
    // user_id: {type: ObjectId, required: true},
    start_time: {type: Date, required: true},
    end_time: {type: Date, required: true}
},
{
    collection: 'reservations'
   },

    {
        methods: {
            isActive(){
                // Destroys reservations or renders it invisible
                // if the reservation has passed
            },
            
            totalCost(){
                // multiplies Car.ppday * Nbr of day of the res
                // for the total cost
            }
        }
    }
)

module.exports = mongoose.model('reservation', reservationSchema);
