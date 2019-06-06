// CRUD-Create Read Update Delete

const db = require("../models");

module.exports = (app) => {

  // Create new user
app.post("/api/soccer", function(req, res){
  db.Soccer.create(req.body)
  .then(dbUserData => res.json(dbUserData))
  .catch(err =>{
    console.log(err);
    res.json(err);
  });
});

// Get user(Read)
app.get("/api/soccer", function(req, res){
  db.Soccer.findAll()
  .then(dbUserData => res.json(dbUserData))
  .catch(err =>{
    console.log(err);
    res.json(err);
  });
});

// Update user info by id
app.get("/api/soccer/:id", function(req, res){
  db.Soccer.findById(req.params.id, {
    include: [{
      model: db.Offer
    }]
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err =>{
    console.log(err);
    res.json(err);
  });
});

// Delete user by there id 
app.delete("/api/soccer/:id", function(req, res){
  db.Soccer.destroy({
    where: {id:req.params.id}
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err =>{
    console.log(err);
    res.json(err);
  });
});

// TODO:

// POST offers to table
app.post("/api/offers", function(req, res) {
  db.Offer.create(req.body)
  .then(dbOfferData => res.json(dbOfferData))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});


// GET ALL OFFERS
// /api/offers "GET"
// GET OFFERS BY NAME
// /api/offers?name="1-on-1"
app.get("/api/offers", function(req, res) {
  if (req.query.name) {
    db.Offer.findAll({
      where: {
        name: req.query.name
      }
    }).then(function(dbOfferData) {
      res.json(dbOfferData)
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    })
  }
  else {
    db.Offer.findAll()
    .then(function(dbOfferData) {
      res.json(dbOfferData)
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    })
  }
});

// associate user with offer (sign up user for class)
// this will accept two parameters from the front end (userId & offerId)
// req.body => {SoccerId: 1, OfferId: 2}
app.post('/api/signup', function(req, res) {
  db.SoccerOffer.create(req.body)
    .then(function(dbSignUp) {
      res.json(dbSignUp);
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
    })
})

// GET ALL OFFERS WITH ASSOCIATED USERS
app.get('/api/offers', function(req, res) {
  db.Offer.findAll({
    include: [{
      model: db.Soccer
    }]
  }).then(function(dbOfferData) {
    res.json(dbOfferData);
  })
  .catch(function(err) {
    console.log(err);
    res.json(err);
  })
})

}






 
