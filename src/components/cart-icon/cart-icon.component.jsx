import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useCartStore } from "../../contexts/cartProvider";

function CartIcon() {
  const { isCartOpen, setIsCartOpen } = useCartStore();

  const toggleIsOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">o</span>
    </div>
  );
}

export default CartIcon;
