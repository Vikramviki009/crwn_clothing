import React from "react";
import "./checkout-item.styles.scss";
import { useCartStore } from "../../contexts/cartProvider";

function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem || {};
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useCartStore();
  const handleIncrement = () => addItemToCart(cartItem);
  const handleDecrement = () => removeItemFromCart(cartItem);

  const clearCartItemHandler = () => clearItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecrement}>
          &#10094;
        </div>
        <span className="value"> {quantity} </span>

        <div className="arrow" onClick={handleIncrement}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearCartItemHandler}>
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutItem;
