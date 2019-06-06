module.exports = function(sequelize, DataTypes) {
  const Offers = sequelize.define(
    "Offer",
    {
      // column data
      offerName: {
        type: DataTypes.ENUM("1-on-1", "large-grp", "small-grp")
      }
    }
  )
  
  // if you need to connect table
  // Offer.associate = function(models) {
  //   Offer.hasMany(models.modelName)
  // }
  Offers.associate = function(models) {
    Offers.belongsToMany(models.Soccer, {
      through: "SoccerOffer"
    });
  }
  
  return Offers;
}