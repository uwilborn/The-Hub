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
    school_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    school_level: {
      type: DataTypes.STRING,
      allowNull: false,
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
