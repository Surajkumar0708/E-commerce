import { combineReducers } from "redux";
import { productsReducer } from "../product-reducer/product-reducer";
import { cartReducer } from "../cart/cart-reducer";
import { authReducer } from "../auth-reducer/auth-reducer";

const mainReducer = combineReducers({
  allProducts: productsReducer,
  cartProducts: cartReducer,
  authReducer: authReducer,
});

export default mainReducer;
