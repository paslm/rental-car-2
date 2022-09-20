const mongoose = require('mongoose');


const carSchema = mongoose.Schema({
    name: {type: String, required: true},
    ppday: {type: Number, required: true},
    picpath: {type: String, required: true},
    availableOrNot: {type: Boolean, required: true}
},

   {
    collection: 'cars'
   }, 

   {
        methods: {
            listOres(){
                // To find reservations that match a specific Car_id
            }
        }
    }
   
)

module.exports = mongoose.model('Car', carSchema);