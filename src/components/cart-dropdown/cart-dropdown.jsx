import React from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useCartStore } from "../../contexts/cartProvider";
import CartItem from "../cart-item/cart-item.component";

function CartDropdown() {
  const { cartItems } = useCartStore();
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
