import User from "./user.js";
import Cart from "./cart.js";
import Product from "./product.js";
import Active from "./active.js";

Cart.belongsTo(User);
User.hasMany(Cart);

Active.belongsTo(User);

export { User, Cart, Product, Active };
