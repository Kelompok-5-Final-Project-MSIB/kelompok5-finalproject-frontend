import React, { useCallback, useEffect } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { calculateDiscountedPrice, formatToCurrency } from '../utils/convertion';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, cartSelector } from '@/src/utils/slices/cartSlice';
import ModalAlert from './alert/ModalAlert';

const Card = ({ id_product, discount, name_product, price, image, token }) => {
  const { errorMessage } = useSelector(cartSelector);

  const router = useRouter();
  const dispatch = useDispatch();
  const goToCourseDetail = (id) => {
    router.push(`/products/${id}`);
  };

  const handleAddToCart = (id, token) => {
    dispatch(addCart({ id_product: id, token: token }));
    if (errorMessage.status === 'error') {
      ModalAlert('Cart', 'error', errorMessage?.message);
    }
    router.push('/cart');
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
            className='bg-center bg-cover'
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
          <button
            onClick={() => handleAddToCart(id_product, token)}
            className='inline-flex items-center px-3 py-2 text-xs font-medium text-center bg-transparent border rounded-full text-primaryBrown border-primaryBrown hover:bg-brown2 group hover:text-white focus:ring-2 focus:outline-none focus:ring-primaryBrown '
          >
            <span className='mr-2'>
              <FaCartShopping className='text-primaryBrown group-hover:text-white' />
            </span>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
