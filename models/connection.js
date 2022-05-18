/////////////
//DEPENDENCIES
/////////////
require("dotenv").config()
const mongoose = require("mongoose");

/////////////////////
// Setup Database Connection
/////////////////////

//loading db url
const DATABASE_URL = process.env.DATABASE_URL;

//establish connection
mongoose.connect(DATABASE_URL);

//Save connection
const cnx = mongoose.connection;

//setup mongoose connection messages
cnx
    .on("open", ()=> console.log("Mongo Connection OPEN"))
    .on("close", ()=> console.log("Mongo Connection CLOSED"))
    .on("error", (err)=> console.log(err));

/////////////////////
// EXPORT CONNECTION
/////////////////////
module.exports = mongoose