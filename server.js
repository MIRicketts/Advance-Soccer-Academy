const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

// Middlewares (use for authentication)

// Dot env for password


// import routes
const routes = require("./routes/Post");

app.use("/", routes);


// set up express to handle parsing
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// Connect to DB
mongoose.connect("mongodb://localhost/custommethods", { useNewUrlParser: true }, console.log("connected to DB"));

// function to start the server
app.listen(PORT, function(){
  console.log("app running on port" + PORT + "!")
});