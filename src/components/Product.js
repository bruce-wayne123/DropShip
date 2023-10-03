import React from "react";
import "../styles/Product.css";
function Product(props) {
  const { title, price, image, rating } = props;
  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            ₹<strong>{price}</strong>
          </p>
          <div className="product_rating">
            <span role="img" aria-label="start">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <span> ⭐ </span>
                ))}
            </span>
          </div>
          <img src={image} alt="productImage" />
        </div>
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
