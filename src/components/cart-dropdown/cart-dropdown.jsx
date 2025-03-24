import React, { useCallback, useEffect } from "react";
import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useCartStore } from "../../contexts/cartProvider";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

function CartDropdown() {
  const { cartItems, setIsCartOpen } = useCartStore();
  const navigate = useNavigate();

  const gotoCheckoutHandler = useCallback(() => {
    setIsCartOpen(false);
    navigate("/checkout");
  }, [navigate, setIsCartOpen]);

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (!e.target.closest(".cart-dropdown-container")) {
        setIsCartOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutSide);
    return () => {
      window.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [setIsCartOpen]);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={gotoCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
