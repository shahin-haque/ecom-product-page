import React from 'react';
import { useGlobalStore } from './ContextProvider';

const CartItems = () => {
  const { Cart } = useGlobalStore();
  return (
    <section>
      <span>Cart</span>

      <article className="cart-wrapper">
        {Cart.length === 0 ? <p>Your cart is empty</p> : <div>cart items</div>}
      </article>
    </section>
  );
};

export default CartItems;
