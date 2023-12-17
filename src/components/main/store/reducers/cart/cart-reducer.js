import { cartActionTypes } from "../../constant/product-types";

const initialState = {
  productList: [],
  isDarkMode: false
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartActionTypes.SET_PRODUCT:
        if(state.productList.find(product=> product.id === payload.id)){
            return {...state, productList: state.productList.map((product)=> {
                if(product.id === payload.id){
                    return {...product, quantity: product.quantity+1}
                }
                return product
            })}
        } else {
            return { ...state, productList: [...state.productList, payload] };
        }
    case cartActionTypes.REMOVE_PRODUCT:
        if(state.productList.find(product=> product.id === payload.id) && payload.quantity > 1){
            return {...state, productList: state.productList.map((product)=> {
                if(product.id === payload.id){
                    return {...product, quantity: product.quantity-1}
                }
                return product
            })}
        } else {
            return {...state, productList: state.productList.filter((product)=> {
                if(product.id !== payload.id){
                    return product
                }
            })}
        }
    case "dark_mode": 
        return {...state, isDarkMode: payload}
    default:
      return state;
  }
};
