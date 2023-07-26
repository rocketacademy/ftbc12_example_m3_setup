const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}

  Users.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      current_course: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
      underscored: true,
      timestamps: false,
    }
  );

  return Users;
};
