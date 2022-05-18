////////////////
//DEPENDENCIES
////////////////
const mongoose = require("./connection");

/////////////////////
//Schema and Model
/////////////////////

const turtleSchema = new mongoose.Schema({
    name: String,
    role: String
})

const Turtle = mongoose.model("Turtle", turtleSchema);

///////////////////
// EXPORT THE MODEL
///////////////////
module.exports = Turtle;