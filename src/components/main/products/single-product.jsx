import React from "react";
import { Link } from "react-router-dom";
import "./single-product.css";
import { useSelector } from "react-redux";

const Product = ({ product }) => {
  const { category, image, description, title, price, rating, id } = product;
  const isDarkMode = useSelector(state => state.cartProducts.isDarkMode)
  const productDescription =
    description.length > 50
      ? `${description.substring(0, 60)}...`
      : description;

  const ratingStyle = rating.rate >= 4 ? "green" : "red"

  return (
    <div className="product">
      <div className="image">
        <Link to={`/products/${id}`}>
        <img src={image} alt="product-image" className={isDarkMode ? "img dark" : "img"} />
        </Link>
      </div>
      <div className="desc-container">
        <p className="product_category">{category.toLocaleUpperCase()}</p>
        <p className="product_title">{title}</p>
        <p>{productDescription}</p>
        <p className={ratingStyle}><i class="fa-solid fa-star"></i> {rating.rate}</p>
        <p className="product_price">
        <span>&#8377;</span> {(price * 87).toFixed(0)}
        </p>
      </div>
    </div>
  );
};

export default Product;
