import { ActionType } from "../../constant/product-types";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  filteredProducts: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PRODUCT:
      console.log("========= action. payload", action.payload);
      return {
        ...state,
        products: action?.payload?.products,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    case ActionType.FETCH_PRODUCT:
      return { ...state, products: action.payload };
    case ActionType.FILTERED_PRODUCT:
      return { ...state, filteredProducts: action.payload };
    default:
      return state;
  }
};
