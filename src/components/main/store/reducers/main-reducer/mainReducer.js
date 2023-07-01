import { combineReducers } from "redux";
import { productsReducer } from "../product-reducer/product-reducer";
import {cartReducer} from "../cart/cart-reducer";

const mainReducer = combineReducers({
    allProducts: productsReducer,
    cartProducts: cartReducer
});

export default mainReducer;