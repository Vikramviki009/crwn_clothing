import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";

const CartContext = createContext({});

export const useCartStore = () => useContext(CartContext);

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
  }, [cartItems]);

  const addItemToCart = useCallback(
    (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd));
    },
    [cartItems]
  );

  const removeItemFromCart = useCallback(
    (productToRemove) => {
      setCartItems(removeCartItem(cartItems, productToRemove));
    },
    [cartItems]
  );

  const clearItemFromCart = useCallback(
    (productToClear) => {
      setCartItems(cartItems.filter((item) => item.id !== productToClear.id));
    },
    [cartItems]
  );

  const value = useMemo(
    () => ({
      isCartOpen,
      setIsCartOpen,
      addItemToCart,
      cartItems,
      cartCount,
      removeItemFromCart,
      clearItemFromCart,
    }),
    [
      isCartOpen,
      addItemToCart,
      cartItems,
      cartCount,
      removeItemFromCart,
      clearItemFromCart,
    ]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
