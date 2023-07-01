import { cartActionTypes } from "../constant/product-types";

export const setProductToCart = (cartProduct, dispatch, formCart) => {
  console.log("========= productto cart", cartProduct);
  if(!formCart){
    cartProduct.quantity = 1;
  }
  dispatch({ type: cartActionTypes.SET_PRODUCT, payload: cartProduct });
};

export const removeProductFromCart = (cartProduct, dispatch) => {
  console.log("===== remove", cartProduct.id);
  dispatch({ type: cartActionTypes.REMOVE_PRODUCT, payload: cartProduct });
};
