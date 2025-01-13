import React from "react";
import "./cart-dropdown.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
