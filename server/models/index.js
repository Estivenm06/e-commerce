const User = require('./user.js')
const Cart = require('./cart.js')
const Product = require('./product.js')
const Active = require('./active.js')

Cart.belongsTo(User)
User.hasMany(Cart)

Active.belongsTo(User)

module.exports = { Product, User, Cart, Active }