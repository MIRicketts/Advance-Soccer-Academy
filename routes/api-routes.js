// CRUD-Create Read Update Delete
const user = require("../models/soccer");

module.exports = app => {

  // Create new user
app.post("api/soccer", function(req, res){
  user.create(req.body)
  .then(dbUserData => res.json(dbUserData))
  .catch(err =>{
    console.log(err);
    res.json(err);
  });
});

// Get user(Read)
app.get("api/soccer", function(req, res){
  user.create(req.body)
  .then(dbUserData => res.json(dbUserData))
  .catch(err =>{
    console.log(err);
    res.json(err);
  });
});

// Update user info by id
app.get("api/soccer/:id", function(req, res){
  user.findById(req.body)
  .then(dbUserData => res.json(dbUserData))
  .catch(err =>{
    console.log(err);
    res.json(err);
  });
});

// Delete user by there id 
app.delete("api/soccer/:id", function(req, res){
  user.destroy({
    where: {id:req.params.id}
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err =>{
    console.log(err);
    res.json(err);
  });
});


}






 
