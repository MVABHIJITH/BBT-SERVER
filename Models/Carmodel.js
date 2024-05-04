const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
     carname: {
        type: String,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    kmdrive: {
        type: String,
        required: true
    },
    geartype: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
     price: {
        type: String,
        required: true
    },
    carImage:{
        type:[String],
        required:true
    }
})

const cars = mongoose.model("cars",carSchema)
module.exports = cars
