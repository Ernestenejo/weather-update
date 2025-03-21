const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    city:{
        type: String,
        required:true
    },
    temperature:{
        type: Number,
        required: true
    },
    condition:{
        type: String,
        required: true
    },
    wind_Speed:{
        type: Number,
        required: true
    },
    humidity:{
        type: Number,
        required: true
    }
}, {timestamps: true});

const weatherModel = mongoose.model('Weather', weatherSchema)

module.exports = weatherModel