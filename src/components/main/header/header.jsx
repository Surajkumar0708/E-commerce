import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterBySearch, toggleDarkMode } from "../store/actions/cart-action";

import "./header.css";

const Header = () => {
  const [searchIsVisible, setSearchIsVisible] = React.useState(false);
  const dispactch = useDispatch();
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.cartProducts.isDarkMode);
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const productList = useSelector((state) => state.allProducts.products);

  const darkMode = isDarkMode ? "switch_dark dark" : "switch_dark";
  const header = isDarkMode ? "header header_dark" : "header";
  const cartProductList = useSelector(
    (state) => state.cartProducts.productList
  );

  React.useEffect(() => {
    const storageKey = localStorage.getItem("usn");
    dispactch({ type: "logout", payload: storageKey });
  }, [isLogin]);

  const searchBarVisibleHandler = () => {
    setSearchIsVisible((prev) => !prev);
  };

  const logOut = () => {
    localStorage.removeItem("usn");
    navigate("/login");
    dispactch({ type: "logout", payload: !isLogin });
  };

  const searchBy = (e) => {
    const searchText = e?.target?.value;
    filterBySearch(productList, searchText, dispactch);
  };

  return (
    <header className={header}>
      <div className="left_header">
        <div>logo</div>
        {
          <nav>
            <ul>
              <li>{isLogin && <Link to="/">Home</Link>}</li>
              <li>{isLogin && <Link to="/about">About</Link>}</li>
              <li>{isLogin && <Link to="/services">Services</Link>}</li>
              <li>{isLogin && <Link to="/products">Product</Link>}</li>
              <li>{isLogin && <Link to="/careers">Careers</Link>}</li>
            </ul>
          </nav>
        }
      </div>
      <div className="right_nav">
        {isLogin &&
          (searchIsVisible ? (
            <div className="search_container">
              <input className="searchbar" type="text" onChange={searchBy} />
              <i
                className="fa-sharp fa-solid fa-xmark discard"
                onClick={searchBarVisibleHandler}
              ></i>
            </div>
          ) : (
            <div onClick={searchBarVisibleHandler}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          ))}
        {isLogin && (
          <div>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping">
                <span>
                  {cartProductList.length ? cartProductList.length : null}
                </span>
              </i>
            </Link>
          </div>
        )}
        <button className="logout_btn" onClick={logOut}>
          {!isLogin ? "Signup" : "logout"}
        </button>
        <div>
          <input
            onChange={() => toggleDarkMode(!isDarkMode, dispactch)}
            id="switch"
            type="checkbox"
            className={darkMode}
          />
          <label htmlFor="switch" className="switch_label"></label>
        </div>
      </div>
    </header>
  );
};

export default Header;
