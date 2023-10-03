import React from "react";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/027/795/321/small_2x/flash-sale-shopping-poster-or-banner-with-flash-icon-on-red-background-flash-sales-banner-template-design-for-social-media-and-website-vector.jpg"
          className="sale_banner_image"
          alt="sale banner "
        />
        <div>
          <h2 className="checkout_title">Your shopping basket</h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
