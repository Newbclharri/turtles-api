/////////////////////////
// DEPENDENCIES
/////////////////////////
require("dotenv").config()

const express = require("express");
const mongoose = require("./models/connection");
const Turtle = require("./models/Turtles");
const turtles = require("./models/turtlesData");

//Create Express App to handle server functions
const app = express();
const PORT = process.env.PORT;

////////////////////
// MIDDLEWARE
/////////////////////
app.use(express.json());
//////////////////
// ROUTES
/////////////////
app.get("/", (req, res)=>(
    res.send("Hello")
));


app.get("/turtles/seed", async (req, res)=>{
    await Turtle.deleteMany({}).catch((err)=>res.send(err));
    await Turtle.create(turtles).catch((err)=>res.send(err));
    const allTurtles = await Turtle.find({}).catch((err)=>res.send(err));
    res.json(allTurtles);    
});

////////////////
// INDUCES - Index Delete Update Create Edit Show
////////////////

//index
app.get("/turtles", async (req, res)=>{
    const allTurtles = await Turtle.find({}).catch(err=>res.send(err));
    res.json(allTurtles);
});

//delete
app.delete("/turtles/:id", async (req, res)=>{
    await Turtle.findByIdAndDelete(req.params.id)
    const allTurtles = await Turtle.find({}).catch(err=>res.send(err));
    res.json(allTurtles);
});

//update
app.put("/turtles/:id", async (req, res)=>{
    await Turtle.findByIdAndUpdate(req.params.id, req.body).catch(err => res.send(err));
    const allTurtles = await Turtle.find({}).catch(err=>res.send(err));
    res.json(allTurtles);
});

//create
app.post("/turtles", async (req, res)=>{;
    const allTurtles = await Turtle.find({}).catch(err=>res.send(err));
    res.json(allTurtles);
});

//show
app.get("/turtles/:id", async (req, res)=>{
    const turtle =  await Turtle.findById(req.params.id).catch(err=>res.send(err));
    res.json(turtle);
});

////////////////////////
// LISTEN
////////////////////////
app.listen(PORT, ()=>console.log("They're listening on port", PORT));