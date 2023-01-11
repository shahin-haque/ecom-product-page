import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useGlobalStore } from './ContextProvider';

const SingleProductScreen = ({ product }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const { addToCart, Cart, decrease, increase } = useGlobalStore();

  const lng = product.productImage.length - 1;
  const nextImage = () => {
    setImgIndex(() => (imgIndex < lng ? imgIndex + 1 : 0));
  };
  const prevImage = () => {
    setImgIndex(() => (imgIndex > 0 ? imgIndex - 1 : lng));
  };

  return (
    <section className="product">
      <div className="img-wrapper">
        <div className="img">
          <Image
            className="main-img"
            src={product.productImage[imgIndex]}
            alt={product.title}
          />
          <div className="controls prev" onClick={() => prevImage()}>
            <Image
              src="/icon-previous.svg"
              alt="next icon"
              width={9.3}
              height={9.3}
            />
          </div>
          <div className="controls next" onClick={() => nextImage()}>
            <Image
              src="/icon-next.svg"
              alt="next icon"
              width={10}
              height={10}
            />
          </div>
        </div>
        <div className="thumbnail">
          {product.productThumbnail.map((item, ind) => (
            <Link key={ind} href="">
              <Image
                onClick={() => setImgIndex(ind)}
                src={item}
                alt="img"
                // width={50}
                // height={50}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="info-wrapper">
        <span>{product?.subTitle}</span>
        <h2 className="title">{product?.title}</h2>
        <p className="info">{product?.info}</p>

        <div className="price-wrapper">
          <h3 className="price">
            ${product.price}.00 <span>{product.discount}</span>
          </h3>

          <p className="prevprice">${product.prevprice}</p>
        </div>

        <div className="qty-cart-wrapper">
          <div>
            <button onClick={() => decrease(product)}>-</button>
            <button>{Cart.length === 0 ? 0 : Cart.map((x) => x.inCart)}</button>
            <button onClick={() => increase(product)}>+</button>
          </div>
          <div>
            <button onClick={() => addToCart(product)} className="btn">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductScreen;
