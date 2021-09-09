const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class School extends Model {}

School.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    schoolname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    schoollevel: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = School;
