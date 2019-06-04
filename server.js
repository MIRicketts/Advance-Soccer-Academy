// set up dependencies and PORT for sever

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models")
// set up middleware

app.use(express.urlencoded({extended:true}));

app.use (express.json());


// create routes 
app.get("/", (req, res) => {
  res.send("index")
});


// wildcard (404) error
app.get("*", function(req, res){
  res.json({
    status: 404,
    message: "Wrong place"
  });
});

// turn on server



// // db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT)

db.sequelize.sync()
.then(function(){
  app.listen(PORT, () => console.log(`=>listening to http://localhost:${PORT}`))
})