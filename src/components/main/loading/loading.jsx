import React from "react";
import { ClipLoader } from "react-spinners";
import "./loading.css"

const LoadingScreen = () => {
    return(
        <div className="spinner-container">
            <div className="loading-spinner">
                <ClipLoader
                    size={50}
                    color="rgba(56, 55, 55, 0.772)"
                    cssOverride={{
                        width: '50px',
                        height:"50px",
                        borderWidth:"5px",
                        // borderStyle:"solid"
                    }}
                />
            </div>
        </div>
    )
}

export default LoadingScreen;