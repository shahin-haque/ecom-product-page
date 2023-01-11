import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useGlobalStore } from './ContextProvider';

const CartItems = () => {
  const { Cart, deleteItems } = useGlobalStore();

  return (
    <section className="cart-section">
      <p>Cart</p>
      {Cart.length === 0 ? (
        <article className="cart-wrapper">
          <p className="empty">Your cart is empty</p>
        </article>
      ) : (
        <div className="fill-cart">
          {Cart.map((item) => {
            return (
              <>
                <div className="items" key={item.id}>
                  <div className="cart-img">
                    <Image
                      src={item.productThumbnail[0]}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="cart-info">
                    <h5>{item.title}</h5>
                    <div>
                      <span>${item.price}.00</span>x<span>{item.inCart}</span>
                      <span className="subTotal">
                        $ {item.price * item.inCart} .00
                      </span>
                      <span
                        className="icon-delete"
                        onClick={() => deleteItems(item)}
                      >
                        <Image
                          src="/icon-delete.svg"
                          width={12}
                          height={12}
                          alt="icon-delete"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <button className="btn cheakout">Cheakout</button>
              </>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CartItems;
