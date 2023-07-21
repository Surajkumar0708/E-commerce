import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./cart-item";
import "./cart.css"
import { Link } from "react-router-dom";

const Cart = () => {
    const [totalCartAmount, setTotalCartItem] = React.useState(null)
    // const [productList, setProductList] = React.useState([])
    const cartList = useSelector(state => state.cartProducts.productList)
    
    const totalAmount = cartList?.reduce((initialValue, currentValue)=>{
        console.log(initialValue, currentValue);
        return initialValue + (currentValue.price * currentValue.quantity)
    },0)

    React.useEffect(()=>{
        setTotalCartItem(totalAmount)
    },[cartList])
    
    console.log("======= suraj",cartList);
    return (
        <div className="cart-container">
            {cartList.length ? cartList.map(product => <CartItem key={product.id} product={product} />) : "Your cart is empty"}
            {cartList.length && <div className="total-container">
                <h2>Total Cart Amount = <span>&#8377;</span> {(totalCartAmount * 87).toFixed()}</h2>
                <Link className="place-oreder-btn" to="/checkout-form">Place Order</Link>
            </div>}
        </div>
    )
}

export default Cart;