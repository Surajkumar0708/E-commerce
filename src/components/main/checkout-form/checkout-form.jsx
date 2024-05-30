import React from "react";
import { useSelector } from "react-redux";

import "./checkout-form.css";
import CartItem from "../cart/cart-item";

const CheckoutForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    address: "",
    pincode: "",
    landmark: "",
  });
  const [error, setError] = React.useState({});

  const cartList = useSelector((state) => state.cartProducts.productList);

  const onChangeOfInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidateTrue = (formData) => {
    let formIsValid = true;
    let error = {};
    if (formData.name === "") {
      error.name = "Please enter your name";
      formIsValid = false;
    }
    if (formData.address === "") {
      error.address = "Please enter full address";
      formIsValid = false;
    }
    if (formData.pincode === "") {
      error.pincode = "Please enter your area pincode";
      formIsValid = false;
    }
    if (formData.landmark === "") {
      error.landmark = "Landmark must not be blank";
      formIsValid = false;
    }

    if (!formIsValid) {
      setError(error);
      return false;
    }

    setError({});
    return true;
  };

  const checkoutSubmit = (e) => {
    e.preventDefault();
    if (!isValidateTrue(formData)) {
      return;
    }
  };

  const getTotalAmount = (list) => {
    return list?.reduce((initialValue, currentValue) => {
      return initialValue + currentValue.price * currentValue.quantity;
    }, 0);
  };

  console.log("==========  suraj cartlist", cartList);

  return (
    <div className="checkout-parent">
      <form className="checkout-form-container" onSubmit={checkoutSubmit}>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={onChangeOfInput}
            value={formData.name}
          />
          {formData.name.length < 4 && <p>{"Name must have 4 character..."}</p>}
        </div>
        <div>
          <input
            name="address"
            type="text"
            placeholder="Enter address"
            onChange={onChangeOfInput}
            value={formData.address}
          />
          {formData.address.length < 4 && (
            <p>{"Address must have 8 character..."}</p>
          )}
        </div>
        <div>
          <input
            name="pincode"
            type="text"
            placeholder="Enter pincode"
            onChange={onChangeOfInput}
            value={formData.pincode}
          />
          {formData.pincode.length < 6 && (
            <p>{"Please provide proper pincode..."}</p>
          )}
        </div>
        <div>
          <input
            name="landmark"
            type="text"
            placeholder="Enter Landmark"
            onChange={onChangeOfInput}
            value={formData.landmark}
          />
          {formData.landmark.length < 10 && (
            <p>{"Landmark must have atleast 10 characters..."}</p>
          )}
        </div>
        <div>
          <button className="checkout-submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="right-checkout-container">
        {cartList.map((product) => (
          <CartItem key={product.id} product={product} checkOut={true} />
        ))}
        <h2>
          Total - <span>&#8377;</span>{" "}
          {(getTotalAmount(cartList) * 87).toFixed()}
        </h2>
      </div>
    </div>
  );
};

export default CheckoutForm;
