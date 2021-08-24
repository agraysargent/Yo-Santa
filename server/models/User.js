const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = reqiore('bcrypt');
const Event = require('./Event');


const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
     }, 
    //  Validate regex...?
    password: {
        type: String,
        required: true,
        minlength: 5
    },
        //  Hashed
    events:  [Event.schema]
    // {
        //  [
        // type: String,
        // booked: Boolean,
        // location: {
        //     address: {
        //         street: String,
        //         city: String,
        //         state: String
        //     }   
        // },
        // ] 
       
    // },
});

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methos.isCorrectPassword = async function(password) {
    return await bcrypt.compate(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;