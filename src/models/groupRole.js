"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group_Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Roles.belongsToMany(models.Groups, { through: `Group_Roles` });
      models.Groups.belongsToMany(models.Roles, { through: `Group_Roles` });
    }
  }
  Group_Roles.init(
    {
      groupId: DataTypes.INTEGER,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Group_Roles",
    }
  );
  return Group_Roles;
};
