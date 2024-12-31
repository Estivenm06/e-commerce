const User = require('./user.js')
const Cart = require('./cart.js')
const Product = require('./product.js')

Cart.belongsTo(User)
User.hasMany(Cart)

module.exports = { Product, User, Cart}