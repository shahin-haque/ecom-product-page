import React from 'react';
import { useGlobalStore } from '../components/ContextProvider';
import SingleProductScreen from '../components/SingleProductScreen';

export default function Home() {
  const { Cart, setCart, Products, setProducts } = useGlobalStore();

  return (
    <main>
      {Products.map((product) => (
        <SingleProductScreen key={product.id} product={product} />
      ))}
    </main>
  );
}
