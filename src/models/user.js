const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        required: [true, "Please enter username"]
    },
    email: {
        type: String,
        trim: true,
        require: [true, "Please enter your email address"],
        unique: [true, "Email address is already registered"],       
    },
    password: {
        type: String, 
        trim: true,
        required: [true, "Please enter password"]
    },
    userType: {
        type: String,
        trim: true,
        required: [true, "Please enter user type"]
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        reference: 'School',
        required: true
    }   
}, {
    timestamps: true
});




const User = mongoose.model('User', userSchema);

module.exports = User