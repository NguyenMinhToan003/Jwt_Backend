"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Groups.hasMany(models.datausers);
      Groups.belongsToMany(models.Roles, { through: `Group_Role` });
    }
  }
  Groups.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Groups",
    }
  );
  return Groups;
};
