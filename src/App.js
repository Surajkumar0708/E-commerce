import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/main/products/productList";
import ProductDetails from "./components/main/products/product-details";
import Header from "./components/main/header/header";
import Home from "./components/main/home/home";
import Login from "./components/main/login/login";
import Cart from "./components/main/cart/cart";
import CheckoutForm from "./components/main/checkout-form/checkout-form";

function App() {
  const renderApp = () => {
    const storageKey = localStorage.getItem("usn");
    if (storageKey === null) {
      console.log("inside if")
      return <Login />;
    } else {
      console.log("inside else", storageKey)
      return (
        <HashRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<ProductList />} />
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
