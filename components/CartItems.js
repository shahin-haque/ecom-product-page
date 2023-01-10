import Link from 'next/link';
import React from 'react';
import { useGlobalStore } from './ContextProvider';

const CartItems = () => {
  const { addToCart, Cart, decrease, increase } = useGlobalStore();

  return (
    <section>
      <Link href="/">
        <span>Cart</span>
      </Link>

      <article className="cart-wrapper">
        {Cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {Cart.map((item) => (
              <div className="items" key={item.id}>
                <h6>{item.title}</h6>
                <h6>${item.price}</h6>
                <h6>Qty: {item.inCart}</h6>
                <button onClick={() => decrease(item)} className="btn dec">
                  -
                </button>
                <button onClick={() => increase(item)} className="btn inc">
                  +
                </button>
              </div>
            ))}
          </div>
        )}
      </article>
    </section>
  );
};

export default CartItems;
