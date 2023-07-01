import React from "react";
import { useSelector } from "react-redux";

const CheckoutForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    address: "",
    pincode: "",
    landmark: "",
  });
  const [error, setError] = React.useState({})

  const cartList = useSelector((state) => state.cartProducts.productList);
  console.log("======== test1", cartList, formData);

  const onChangeOfInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidateTrue = (formData) => {
    let formIsValid = true
    let error = {};
    if(formData.name === ""){
        error.name = "Please enter your name"
        formIsValid = false
    }
    if(formData.address === ""){
        error.address = "Please enter full address"
        formIsValid = false
    }
    if(formData.pincode === ""){
        error.pincode = "Please enter your area pincode"
        formIsValid = false
    }
    if(formData.landmark === ""){
        error.landmark = "Landmark must not be blank"
        formIsValid = false
    }

    if(!formIsValid) {
        setError(error);
        return false;
    };

    setError({})
    return true;
  }

  const checkoutSubmit = (e) => {
    e.preventDefault();
    if(!isValidateTrue(formData)){
        return
    }
    
    console.log("======= inside submit");
  };

  return (
    <form onSubmit={checkoutSubmit}>
      <div>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          onChange={onChangeOfInput}
          value={formData.name}
        />
        {error.name && <p>{error.name}</p>}
      </div>
      <div>
        <input
          name="address"
          type="text"
          placeholder="Enter address"
          onChange={onChangeOfInput}
          value={formData.address}
        />
        {error.address && <p>{error.address}</p>}
      </div>
      <div>
        <input
          name="pincode"
          type="text"
          placeholder="Enter pincode"
          onChange={onChangeOfInput}
          value={formData.pincode}
        />
        {error.pincode && <p>{error.pincode}</p>}
      </div>
      <div>
        <input
          name="landmark"
          type="text"
          placeholder="Enter Landmark"
          onChange={onChangeOfInput}
          value={formData.landmark}
        />
        {error.landmark && <p>{error.landmark}</p>}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
