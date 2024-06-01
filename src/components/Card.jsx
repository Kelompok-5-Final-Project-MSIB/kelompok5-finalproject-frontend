import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { calculateDiscountedPrice, formatToCurrency } from '../utils/convertion';
import { useRouter } from 'next/navigation';

const Card = ({ id_product, discount, name_product, price, image }) => {
  const router = useRouter();
  const goToCourseDetail = (id) => {
    router.push(`/products/${id}`);
  };

  return (
    <>
      <div className='max-w-sm bg-white border border-gray-200 rounded-lg '>
        <div
          onClick={() => goToCourseDetail(id_product)}
          className='flex items-center justify-center w-full overflow-hidden shadow-lg cursor-pointer h-44'
        >
          <img
            src={image}
            alt='image shoes'
          />
        </div>
        <div className='p-5'>
          <div onClick={() => goToCourseDetail(id_product)}>
            <h1 className='mb-2 text-base font-bold tracking-tight text-gray-900 cursor-pointer '>{name_product}</h1>
          </div>
          <h3 className='flex justify-between mb-3'>
            <p className='text-sm font-semibold'>{formatToCurrency(calculateDiscountedPrice(price, discount))}</p>
            <p
              className={`${
                calculateDiscountedPrice(price, discount) === price ? 'hidden' : ''
              } text-sm line-through text-textInput`}
            >
              {formatToCurrency(price)}
            </p>
          </h3>
          <a
            href='#'
            className='inline-flex items-center px-3 py-2 text-xs font-medium text-center bg-transparent border rounded-full text-primaryBrown border-primaryBrown hover:bg-brown2 group hover:text-white focus:ring-2 focus:outline-none focus:ring-primaryBrown '
          >
            <span className='mr-2'>
              <FaCartShopping className='text-primaryBrown group-hover:text-white' />
            </span>
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
