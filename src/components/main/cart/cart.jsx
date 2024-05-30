import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./cart-item";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const isDarkMode = useSelector((state) => state.cartProducts.isDarkMode);
  const [totalCartAmount, setTotalCartItem] = React.useState(null);
  const cartList = useSelector((state) => state.cartProducts.productList);

  const totalAmount = cartList?.reduce((initialValue, currentValue) => {
    return initialValue + currentValue.price * currentValue.quantity;
  }, 0);

  React.useEffect(() => {
    setTotalCartItem(totalAmount);
  }, [cartList]);

  return (
    <div className={isDarkMode ? "cart-container dark" : "cart-container"}>
      {cartList.length
        ? cartList?.map((product) => (
            <CartItem key={product?.id} product={product} />
          ))
        : "Your cart is empty"}
      {cartList.length && (
        <div className="total-container">
          <h2>
            Total Cart Amount = <span>&#8377;</span>{" "}
            {(totalCartAmount * 87).toFixed()}
          </h2>
          <Link className="place-oreder-btn" to="/checkout-form">
            Place Order
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
