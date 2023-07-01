import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./header.css";

const Header = () => {
  const [searchIsVisible, setSearchIsVisible] = React.useState(false);
  const cartProductList = useSelector(
    (state) => state.cartProducts.productList
  );

  const searchBarVisibleHandler = () => {
    setSearchIsVisible((prev) => !prev);
  };

  const logOut = () => {
    localStorage.removeItem("usn");
    window.location.reload();
  };
  console.log(cartProductList);

  return (
    <header className="header">
      <div className="left_header">
        <div>logo</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="right_nav">
        {searchIsVisible ? (
          <div className="search_container">
            <input className="searchbar" type="text" />
            <i
              className="fa-sharp fa-solid fa-xmark discard"
              onClick={searchBarVisibleHandler}
            ></i>
          </div>
        ) : (
          <div onClick={searchBarVisibleHandler}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        )}
        <div>
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping">
          <span>
            {cartProductList.length ? cartProductList.length : null}
          </span>
          </i>
          </Link>
        </div>
        <button onClick={logOut}>logout</button>
      </div>
    </header>
  );
};

export default Header;
