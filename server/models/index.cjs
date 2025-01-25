'use scric';

const User = require('./user.cjs')
const Cart = require('./cart.cjs')
const Product = require('./product.cjs')
const Active = require('./active.cjs')

Cart.belongsTo(User)
User.hasMany(Cart)

Active.belongsTo(User)

module.exports = { Product, User, Cart, Active }