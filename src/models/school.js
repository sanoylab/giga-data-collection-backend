const mongoose = require('mongoose');
require('dotenv').config();

const schoolSchema = new mongoose.Schema({
    schoolName: {
        type: String,
        trim: true,
        required: [true, "Please enter school name"]
    },
    countryCode:{
        type: String,
        trim: true,
        required: [true, "Please enter iso country code"]
    },
    address: {
        type: String,
        trim: true,
        required: [true, "Please enter address"]
    },
    latitude: {
        type: String,
        trim: true,
        required: [true, "Please enter latitude"]
    },
    longitude: {
        type: String,
        trim: true,
        required: [true, "Please enter longitude"]
    },
    speedConnectivity: {
        type: String,
        trim: true,
        required: [true, "Please enter speed connectivity"]
    },
    typeConnectivity: {
        type: String,
        trim: true,
        required: [true, "Please enter type of connectivity"]
    }
 
}, {
    timestamps: true
});

schoolSchema.virtual("schoolPostedBy", {
    ref: "User",
    localField: "_id",
    foreignField: "postedBy"
});

schoolSchema.set('toObject', {virtuals: true});
schoolSchema.set('toJSON', { virtuals: true });


const School = mongoose.model('School', schoolSchema);

module.exports = School