import Image from 'next/image';
import CartImg from '../public/icon-cart.svg';

const CartIcon = () => {
  return (
    <span className="cart-icon">
      <Image src={CartImg} alt="avatar" />
    </span>
  );
};

export default CartIcon;
