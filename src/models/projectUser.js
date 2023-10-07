"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project_Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Projects.belongsToMany(models.datausers, {
        through: Project_Users,
      });
      models.datausers.belongsToMany(models.Projects, {
        through: Project_Users,
      });
    }
  }
  Project_Users.init(
    {
      projectId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Project_Users",
    }
  );
  return Project_Users;
};
