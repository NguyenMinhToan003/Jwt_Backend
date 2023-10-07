"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class datausers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      datausers.belongsTo(models.Groups);
      datausers.belongsToMany(models.Projects, { through: `Project_Users` });
    }
  }
  datausers.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      gender: DataTypes.STRING,
      groupId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "datausers",
    }
  );
  return datausers;
};
