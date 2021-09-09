const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Books extends Model {}

School.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author_firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    book_cost: {
      type: DataTypes.INTEGER,
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

module.exports = Books;
