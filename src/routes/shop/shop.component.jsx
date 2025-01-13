import React from "react";
import { useProductsStore } from "../../contexts/productsProvider";
import ProductCard from "../../components/product-card/productCard";
import "./shop.styles.scss";

function Shop() {
  const { products: SHOP_DATA } = useProductsStore();
  return (
    <div className="products-container">
      {SHOP_DATA?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
