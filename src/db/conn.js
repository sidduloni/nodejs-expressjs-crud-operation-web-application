const mongoose = require("mongoose")

// Creating db
mongoose.connect("mongodb://localhost:27017/mynodewebapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection to db succesfull")
}).catch((error) => {
    console.log(error);
})