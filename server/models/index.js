import Category from './category'
import Product from './product'
import User from './user'
import Cart from './cart'

Product.belongsTo(Category)
Category.hasMany(Product)
User.hasMany(Product)

Product.belongsTo(User, {through: Cart})

Category.sync({})
Product.sync({})
User.sync({})
Cart.sync({})

export default {Category, Product, User, Cart}