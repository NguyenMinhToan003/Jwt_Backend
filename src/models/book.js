"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Books.belongsToMany(models.datausers, {
        through: `User_Books`,
        foreignKey: "bookId",
      });
    }
  }
  Books.init(
    {
      urlImage: DataTypes.STRING,
      name: DataTypes.STRING,
      author: DataTypes.STRING,
      date: DataTypes.DATE,
      description: DataTypes.TEXT,
      vote: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Books",
    }
  );
  return Books;
};
