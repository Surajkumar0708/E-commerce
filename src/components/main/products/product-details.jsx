import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/use-fetch";
import LoadingScreen from "../loading/loading";
import { useDispatch } from "react-redux";
import { setProductToCart } from "../store/actions/cart-action";

import "./product-details.css";

const ProductDetails = () => {
    const dispatch = useDispatch()
  const { id } = useParams();
  const { productList, error, isLoading } = useFetchData(
    `https://fakestoreapi.com/products/${id}`
  );
  const { title, image, description, price, rating, category } = productList;
  const ratingStyle = rating?.rate >= 4 ? "green" : "red"

  console.log("======== product-details",productList);

  const setProductToCart2 = () => {
    setProductToCart(productList, dispatch)
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
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
