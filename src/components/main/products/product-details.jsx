import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/use-fetch";
import LoadingScreen from "../loading/loading";
import { useDispatch } from "react-redux";
import { setProductToCart } from "../store/actions/cart-action";

import "./product-details.css";
import Toast from "../toast-msg/toast";

const ProductDetails = () => {
  const pincodeRef = React.useRef(null)
  const [pinAvailCheckMsg, setPinAvailCheckMsg] = React.useState("");
  const pincodeArr = [497339, 497335, 497442]
  const [isToastShow, setIsToastShow] = React.useState(false)
  const dispatch = useDispatch()
  const { id } = useParams();
  const { productList, isLoading } = useFetchData(
    `https://fakestoreapi.com/products/${id}`
    );
  const { title, image, description, price, rating, category } = productList;
  const ratingStyle = rating?.rate >= 4 ? "green" : "red"
  const pincodeStyle = pinAvailCheckMsg === "Product is not available on selected pincode" ? "red_str" : "green_str"

  const setProductToCart2 = () => {
    setProductToCart(productList, dispatch)
    setIsToastShow(true)
  }

  const checkAvailability = () => {
    const enteredPincode = pincodeRef.current.value
    if(enteredPincode && pincodeArr.includes(+enteredPincode)) {
      setPinAvailCheckMsg("Delivery is available on selected pincode");
    } else {
      setPinAvailCheckMsg("Product is not available on selected pincode");
    }
  }

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="details-page">
          <div className="img-container">
            <img src={image} alt="" />
          </div>
          <div className="single-desc-container">
            <h1>{title}</h1>
            <u>{category?.toLocaleUpperCase()}</u>
            <p>{description}</p>
            <p className="product-price"><span>&#8377;</span> {(price * 87).toFixed()}</p>
            <p className={ratingStyle}><i class="fa-solid fa-star"></i> {rating?.rate}</p>
            <div className="add-to-cart-btn">
            <button onClick={setProductToCart2}>Add to Cart</button>
            <div className="pincode">
              <input ref={pincodeRef} id="pincode" type="number" placeholder="Enter Pincode" />
              {pinAvailCheckMsg && <p className={pincodeStyle}>{pinAvailCheckMsg}</p>}
              <button onClick={checkAvailability}>Check Availability</button>
            </div>
          </div>
          </div>
        </div>
      )}
      {!isLoading && isToastShow && <Toast setIsToastShow={setIsToastShow} msg={`${category?.toLocaleUpperCase()} is added to CART successfully`}/>}
    </div>
  );
};

export default ProductDetails;
