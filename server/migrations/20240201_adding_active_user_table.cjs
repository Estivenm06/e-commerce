'use scric';

const {DataTypes} = require('sequelize')

module.exports = {
    up: async ({context: queryInterface}) => {
        await queryInterface.createTable('actives', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {model: 'users', key: 'id'}
            },
            active: {
                type: DataTypes.TEXT,
                allowNull: false,
            }
        })
    },
    down: async ({context: queryInterface}) => {
        await queryInterface.dropTable('actives')
    }
}