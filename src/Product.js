import React from "react";
import "./Product.css";

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The lean Startup</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                    <p>*</p>
                    <p>*</p>
                    <p>*</p>
                </div>
            </div>
            <img src="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg" 
            alt=""
            />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product;