import React, { createContext, useContext, useState } from 'react';
import productData from './product-data';
export const context = createContext();

const ContextProvider = ({ children }) => {
  const [Products, setProducts] = useState(productData);
  const [Cart, setCart] = useState([]);

  return (
    <context.Provider value={{ Cart, setCart, Products, setProducts }}>
      {children}
    </context.Provider>
  );
};
export const useGlobalStore = () => useContext(context);
export default ContextProvider;
