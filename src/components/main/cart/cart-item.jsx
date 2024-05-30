import React from "react";
import {
  removeProductFromCart,
  setProductToCart,
} from "../store/actions/cart-action";
import { useDispatch } from "react-redux";

import "./cart-item.css";
import "../checkout-form/checkout-form.css";

const CartItem = (props) => {
  const { title, quantity, price, image } = props.product;
  const dispatch = useDispatch();
  console.log(quantity, price);

  const removeItemFromCart = () => {
    console.log("total amount inside cart");
    removeProductFromCart(props.product, dispatch);
  };

  const addToCart = () => {
    setProductToCart(props.product, dispatch, true);
  };

  const style = props.checkOut
    ? "checkout-image-container"
    : "cart-image-container";

  const style2 = props.checkOut ? "checkout-title-quantity" : "title-quantity";
  const style3 = props.checkOut ? "left-checkout-item" : "left-cart-item";

  return (
    <div className="cart-item-container">
      <div className={style3}>
        <div className={style}>
          <img src={image} alt="product-image" />
        </div>
        <div className={style2}>
          <span>{title}</span>
          <span>&#8377; {(price * 87).toFixed(0)} </span>
          <span className="quantity">x{quantity}</span>
          {!props.checkOut && (
            <div className="cart-btn">
              <button onClick={addToCart}>+</button>
              <button onClick={removeItemFromCart}>-</button>
            </div>
          )}
        </div>
      </div>
      <h1 className="amount-text">
        &#8377;{quantity * (price * 87).toFixed(0)}
      </h1>
    </div>
  );
};

export default CartItem;
