const mongoose = require("mongoose");


async function connectDB() {

    await mongoose.connect("mongodb+srv://user1:user1@complete-backend-cluste.s5cedjs.mongodb.net/halley")

    console.log("Connected to DB")
}

module.exports = connectDB