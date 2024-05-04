const mongoose = require("mongoose")

const testdriveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    carmodel: {
        type: String,
        required: true
    },
    carname: {
        type: String,
        required: true
    },
    confdate: {
        type: String,
        required: true
    }


})

const testdrive = mongoose.model("testdrive", testdriveSchema)

module.exports = testdrive