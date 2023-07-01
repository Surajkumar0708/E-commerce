import { ActionType } from "../constant/product-types";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) return;
    const data = await res.json();
    dispatch({ type: ActionType.FETCH_PRODUCT, payload: data });
  } catch (e) {
    console.log(e);
  }
};
