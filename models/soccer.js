const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  const Soccer = sequelize.define(
    "Soccer",
    {
  name : {
    type : DataTypes.STRING,
    allowNull : false
  },
  age : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
  email : {
    type : DataTypes.TEXT,
    allowNull : false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true
  }  
    },
    {
      timestamps: false
    });

    Soccer.associate = function(models) {
      Soccer.belongsToMany(models.Offer, {
        through: "SoccerOffer"
      });
    };

     // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
     Soccer.prototype.validPassword = function(password) {
       const document = this;
       return new Promise((resolve, reject) => {
         // run bcrypt.compare method to compare incoming password (i.e. 12345) with user's hashed password (i.e. 3rueoiehw4hgoig43)
         bcrypt.compare(password, document.password, function compareCallback(err, same) {
           if (err) {
             console.log(err);
             reject(err);
           }else {
             resolve(same)
           }
         });
       });
     };
     // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Soccer.beforeCreate(function(soccer){
    console.log(soccer);
    soccer.password = bcrypt.hashSync(soccer.password, bcrypt.genSaltSync(10), null);
  });
  
  return Soccer;
}