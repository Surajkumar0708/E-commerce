import { ActionType, cartActionTypes } from "../constant/product-types";

export const setProductToCart = (cartProduct, dispatch, formCart) => {
  if (!formCart) {
    cartProduct.quantity = 1;
  }
  dispatch({ type: cartActionTypes.SET_PRODUCT, payload: cartProduct });
};

export const removeProductFromCart = (cartProduct, dispatch) => {
  dispatch({ type: cartActionTypes.REMOVE_PRODUCT, payload: cartProduct });
};

export const toggleDarkMode = (darkMode, dispatch) => {
  dispatch({ type: "dark_mode", payload: darkMode });
};

export const filterBySearch = (list, searchText, dispatch) => {
  console.log("=========== searchText", searchText);
  if (searchText) {
    const filteredList = list?.filter(
      (product) =>
        product.title.includes(searchText) ||
        product.category.includes(searchText)
    );
    dispatch({ type: ActionType.FILTERED_PRODUCT, payload: filteredList });
    console.log("========= filteredList", filteredList);
  } else {
    dispatch({ type: ActionType.FILTERED_PRODUCT, payload: list });
  }
};
