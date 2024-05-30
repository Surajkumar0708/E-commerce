import React from "react";
import { ClipLoader } from "react-spinners";
import "./loading.css";

const LoadingScreen = () => {
  return (
    <div className="spinner-container">
      <ClipLoader
        size={50}
        color="white"
        cssOverride={{
          width: "50px",
          height: "50px",
          borderWidth: "5px",
        }}
      />
    </div>
  );
};

export default LoadingScreen;
