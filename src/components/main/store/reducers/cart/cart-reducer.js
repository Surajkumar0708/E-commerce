import { cartActionTypes } from "../../constant/product-types";

const initialState = {
  productList: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
    console.log("======== payload", payload);
  switch (type) {
    case cartActionTypes.SET_PRODUCT:
        if(state.productList.find(product=> product.id === payload.id)){
            return {...state, productList: state.productList.map((product)=> {
                console.log("======== product.id", product.quantity, payload.quantity);
                if(product.id === payload.id){
                    return {...product, quantity: product.quantity+1}
                }
                return product
            })}
        } else {
            return { ...state, productList: [...state.productList, payload] };
        }
    case cartActionTypes.REMOVE_PRODUCT:
        console.log("==== payload", payload.quantity);
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
    default:
      return state;
  }
};
