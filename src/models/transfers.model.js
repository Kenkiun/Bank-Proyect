const {DataTypes} = require('sequelize')
const {db} = require('./../database/config')

const Transfer = db.define('transfers', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  snderUserId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  recieverId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = Transfer