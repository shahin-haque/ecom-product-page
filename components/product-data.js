import productImg1 from '../public/image-product-1.jpg';
import productImg2 from '../public/image-product-2.jpg';
import productImg3 from '../public/image-product-3.jpg';
import productImg4 from '../public/image-product-4.jpg';

import thumbnailImg1 from '../public/image-product-1-thumbnail.jpg';
import thumbnailImg2 from '../public/image-product-2-thumbnail.jpg';
import thumbnailImg3 from '../public/image-product-3-thumbnail.jpg';
import thumbnailImg4 from '../public/image-product-4-thumbnail.jpg';

const products = [
  {
    id: 1,
    price: 125.0,
    discount: '50%',
    prevprice: 250.0,
    inCart: 0,
    subTitle: 'Sneaker Company',
    title: 'Fall Limited Edition Sneakers',
    info: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    productImage: [productImg1, productImg2, productImg3, productImg4],
    productThumbnail: [
      thumbnailImg1,
      thumbnailImg2,
      thumbnailImg3,
      thumbnailImg4,
    ],
  },
];
export default products;
