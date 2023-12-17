import React from "react";
import Product from "./single-product";
import "./product-list.css"
import LoadingScreen from "../loading/loading";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions/product-actions";
const ProductList = () => {
  const error = false
  const ProductList = useSelector(state => state.allProducts.products)
  const isDarkMode = useSelector(state => state.cartProducts.isDarkMode)
  const disPatch = useDispatch()
  console.log(ProductList)

  React.useEffect(() => {
    disPatch(getProducts())
  },[])

  const showProdcutData = React.useCallback(() => {
    if (ProductList?.length === 0) {
      return <LoadingScreen />;
    }
    return error ? (
      <h1>{error.message}</h1>
    ) : (
      ProductList?.map((product) => {
        return(
        <Product
          key={product.id}
          product={product}
        />
        )
      })
    );
  },[ProductList?.length])

  return (
    <React.Fragment>
      <div className={isDarkMode ? "product_list dark" : "product_list"}>{showProdcutData()}</div>
    </React.Fragment>
  );
};

export default ProductList;
