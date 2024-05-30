import React from "react";
import Product from "./single-product";
import "./product-list.css";
import LoadingScreen from "../loading/loading";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/actions/product-actions";
const ProductList = () => {
  const error = false;
  const ProductList = useSelector((state) => state.allProducts.products);
  const filteredProducts = useSelector(
    (state) => state.allProducts.filteredProducts
  );
  const isDarkMode = useSelector((state) => state.cartProducts.isDarkMode);
  const disPatch = useDispatch();

  const productData = filteredProducts.length ? filteredProducts : ProductList;

  React.useEffect(() => {
    disPatch(getProducts());
  }, []);

  const showProdcutData = React.useCallback(() => {
    if (productData?.length === 0) {
      return (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            position: "absolute",
            top: "0%",
          }}
        >
          <LoadingScreen />
        </div>
      );
    }
    return error ? (
      <h1>{error.message}</h1>
    ) : (
      productData?.map((product) => {
        return <Product key={product.id} product={product} />;
      })
    );
  }, [productData?.length]);

  return (
    <React.Fragment>
      <div className={isDarkMode ? "product_list dark" : "product_list"}>
        {showProdcutData()}
      </div>
    </React.Fragment>
  );
};

export default ProductList;
