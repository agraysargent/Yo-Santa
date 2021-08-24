const mongoose = require('mongoose');
const { Schema } = mongoose;


const eventSchema = ({
    name: {
        type: String
    },
    duration: {
        type: Number
    },
    price: {
        type: Number
    }
});


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;