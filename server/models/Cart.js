const mongoose = require('mongoose');
const { Schema } = mongoose;


const cartSchema = ({
    subtotal: {
        type: Number
    } 
    // $aggregate
    // pulling in User?
})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;