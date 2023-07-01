import React from "react";
import "./shimmer.css"

const ShimmerEffect = () => {
    return(
        <div className="product_shimmer animate">
            <div className="image_shimmer animate"></div>
            <div className="desc-container_shimmer animate">
                <p className="stroke animate"></p>
                <p className="stroke animate"></p>
                <p className="stroke animate"></p>
                <p className="stroke animate"></p>
                <p className="stroke animate"></p>
            </div>
        </div>
    )
}

export default ShimmerEffect;