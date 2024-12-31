import { DataTypes, Model } from "sequelize";
import {sequelize} from '../utils/db'
import Category from "./category";

class Product extends Model {}
Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    category: {
        type: DataTypes.TEXT,
        allowNull: false,
        references: {model: Category, key: 'name'}
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        rate: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
}, {sequelize, underscored: true, timestamps: false, tableName: 'product'})

export default Product