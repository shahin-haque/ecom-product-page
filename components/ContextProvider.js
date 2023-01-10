import React, { createContext, useContext, useState } from 'react';
import productData from './product-data';
export const context = createContext();

const ContextProvider = ({ children }) => {
  const [Products, setProducts] = useState(productData);
  const [Cart, setCart] = useState([]);
  const addToCart = (product) => {
    const alreadyInCart = Cart.find((item) => item.id === product.id);
    if (alreadyInCart) {
      setCart(
        Cart.map((item) =>
          item.id === product.id ? { ...item, inCart: item.inCart + 1 } : item
        )
      );
    } else {
      setCart(() => [...Cart, { ...product, inCart: 1 }]);
    }
    console.log(Cart);
  };

  const decrease = (product) => {
    const alreadyInCart = Cart.find((item) => item.id === product.id);
    if (alreadyInCart && alreadyInCart.inCart > 1) {
      setCart(
        Cart.map((item) =>
          item.id === product.id ? { ...item, inCart: item.inCart - 1 } : item
        )
      );
    } else {
      setCart(Cart.filter((x) => x.id === !product.id));
    }
  };
  const increase = (product) => {
    const alreadyInCart = Cart.find((item) => item.id === product.id);
    if (alreadyInCart) {
      setCart(
        Cart.map((item) =>
          item.id === product.id ? { ...item, inCart: item.inCart + 1 } : item
        )
      );
    }
  };

  return (
    <context.Provider
      value={{
        Cart,
        setCart,
        Products,
        setProducts,
        addToCart,
        decrease,
        increase,
      }}
    >
      {children}
    </context.Provider>
  );
};
export const useGlobalStore = () => useContext(context);
export default ContextProvider;
