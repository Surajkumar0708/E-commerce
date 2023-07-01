import React from "react";
import useFetchData from "../../hooks/use-fetch";
import Product from "./single-product";
import "./product-list.css"
import LoadingScreen from "../loading/loading";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions/product-actions";
const ProductList = () => {
  const url = "https://fakestoreapi.com/products";
  // const { error } = useFetchData(url);
  // console.log(productList);
  const error = false

  const ProductList = useSelector(state => state.allProducts.products)
  const disPatch = useDispatch()
  console.log(ProductList)

  React.useEffect(() => {
    console.log("======== list");
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
      <div className="product_list">{showProdcutData()}</div>
    </React.Fragment>
  );
};

export default ProductList;
