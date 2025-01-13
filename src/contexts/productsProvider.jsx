import React, { createContext, useContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";

const ProductsContext = createContext({});

export const useProductsStore = () => useContext(ProductsContext);

function ProductsProvider({ children }) {
  const [products, setProducts] = useState(SHOP_DATA);

  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
