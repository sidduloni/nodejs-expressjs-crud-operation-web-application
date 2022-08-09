const mongoose = require("mongoose")
// const validator = require("validator")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        // required: true,
        // minLength: 3
    },
    email: {
        type: String,
        // required: true,
       
    },
    message: {
        type: String,
        // required: true,
        // minLength: 4
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("User", userSchema)