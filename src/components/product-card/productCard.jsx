import React from "react";
import "./product-card.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useCartStore } from "../../contexts/cartProvider";

function ProductCard({ product }) {
  const { addItemToCart } = useCartStore();
  const { imageUrl, name, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => addItemToCart(product)}
      >
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
