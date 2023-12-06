"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Books.belongsToMany(models.datausers, {
        through: `User_Books`,
      });
      models.datausers.belongsToMany(models.Books, {
        through: `User_Books`,
      });
    }
  }
  User_Books.init(
    {
      bookId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User_Books",
    }
  );
  return User_Books;
};
