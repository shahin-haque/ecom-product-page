import Image from 'next/image';
import React, { useState } from 'react';

const SingleProductScreen = ({ product }) => {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <section>
      <div className="img-wrapper">
        <div className="img">
          <Image
            className="main-img"
            src={product.productImage[imgIndex]}
            alt={product.title}
          />
          <div className="controls prev">
            <Image
              src="/icon-previous.svg"
              alt="next icon"
              width={9.3}
              height={9.3}
              onClick={() => setImgIndex(imgIndex - 1)}
            />
          </div>
          <div className="controls next">
            <Image
              src="/icon-next.svg"
              alt="next icon"
              width={10}
              height={10}
              onClick={() => setImgIndex(imgIndex + 1)}
            />
          </div>
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
            <button>-</button>
            <button>0</button>
            <button>+</button>
          </div>
          <div>
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductScreen;
