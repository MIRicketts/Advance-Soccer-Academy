module.exports = function(sequelize, DataTypes) {
  const Soccer = sequelize.define(
    "Soccer",
    {
  name : {
    type : DataTypes.STRING,
    allow : false
  },
  age : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
  email : {
    type : DataTypes.TEXT,
    allowNull : false
  }
    },
    {
      timestamps: false
    });

    Soccer.associate = function(models) {
      Soccer.belongsToMany(models.Offer, {
        through: "SoccerOffer"
      })
    }
  return Soccer;
}