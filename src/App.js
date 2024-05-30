import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/main/products/productList";
import ProductDetails from "./components/main/products/product-details";
import Header from "./components/main/header/header";
import Home from "./components/main/home/home";
import Login from "./components/main/login/login";
import Cart from "./components/main/cart/cart";
import CheckoutForm from "./components/main/checkout-form/checkout-form";

import "./App.css";
import { useSelector } from "react-redux";
import Services from "./components/main/services/services";
import About from "./components/main/about/about";
import Careers from "./components/main/careers/careers";
function App() {
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  React.useEffect(() => {}, [isLogin]);
  const renderApp = () => {
    const storageKey = localStorage.getItem("usn");
    if (storageKey === null) {
      console.log("inside if");
      return (
        <HashRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </HashRouter>
      );
    } else {
      return (
        <HashRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/careers" element={<Careers />} />
            <Route exact path="/products/:id" element={<ProductDetails />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout-form" element={<CheckoutForm />} />
          </Routes>
        </HashRouter>
      );
    }
  };
  return renderApp();
}

export default App;
