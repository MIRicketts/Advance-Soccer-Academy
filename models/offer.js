module.exports = function(sequelize, DataTypes) {
  const Offer = sequelize.define(
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
  Offer.associate = function(models) {
    Offer.hasMany(models.Soccer, {
      through: "SoccerOffer"
    });
  }
  
  return Offer;
}