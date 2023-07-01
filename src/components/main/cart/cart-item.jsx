import React from "react";
import { removeProductFromCart, setProductToCart } from "../store/actions/cart-action";
import { useDispatch } from "react-redux";

import "./cart-item.css";

const CartItem = (props) => {
  const { title, quantity, price, image } = props.product;
  const dispatch = useDispatch();
  console.log(quantity, price);

  const removeItemFromCart = () => {
    console.log("total amount inside cart");
    removeProductFromCart(props.product, dispatch)
  }

  const addToCart = () => {
    setProductToCart(props.product, dispatch, true)
  }

  return (
    <div className="cart-item-container">
      <div className="left-cart-item">
        <div className="cart-image-container">
          <img src={image} alt="" />
        </div>
        <div className="title-quantity">
            <span>{title}</span>
            <span>&#8377; {(price * 87).toFixed(0)} </span>
            <span className="quantity">x{quantity}</span>
            <div className="cart-btn">
                <button onClick={addToCart}>+</button>
                <button onClick={removeItemFromCart}>-</button>
            </div>
        </div>
      </div>
      <h1>&#8377;{quantity * (price * 87).toFixed(0)}</h1>
    </div>
  );
};

export default CartItem;
