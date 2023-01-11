import Image from 'next/image';
import { useState } from 'react';
import CartImg from '../public/icon-cart.svg';
import CartItems from './CartItems';

const CartIcon = () => {
  const [openCartPopUp, setOpenCartPopUp] = useState(false);
  return (
    <>
      <button
        className="cart-icon"
        onClick={() => setOpenCartPopUp(!openCartPopUp)}
      >
        <Image src={CartImg} alt="avatar" />
      </button>
      {openCartPopUp && <CartItems />}
    </>
  );
};

export default CartIcon;
