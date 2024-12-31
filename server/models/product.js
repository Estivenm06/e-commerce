const {Model, DataTypes} = require('sequelize')
const {sequelize} = require('../utils/config.js')

class Product extends Model {}
Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(1000),
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.JSON,
    }
}, {sequelize, underscored: true, timestamps: false, tableName: 'products'})

module.exports = Product