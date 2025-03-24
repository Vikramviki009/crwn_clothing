import React from "react";
import { useCartStore } from "../../contexts/cartProvider";
import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkoutItem.component";

function Checkout() {
  const { cartItems = [] } = useCartStore();

  const totalValue =
    cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    ) || 0;

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => {
        const { id } = item;
        return <CheckoutItem cartItem={item} key={id} />;
      })}
      <span className="total">Total: {totalValue}</span>
    </div>
  );
}

export default Checkout;
