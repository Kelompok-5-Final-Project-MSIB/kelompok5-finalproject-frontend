import React from 'react';
import Image from 'next/image';
import { FaShoppingCart, FaHeart, FaRegTrashAlt } from 'react-icons/fa';
const ProductCard = ({ product, isInCart }) => {
  return (
    <div className='flex flex-col items-center justify-between px-4 py-3 shadow-md md:flex-row'>
      <div className='flex items-center'>
        {isInCart && (
          <input
            id='default-checkbox'
            type='checkbox'
            value=''
            className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primaryBrown focus:ring-primaryBrown dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
        )}
        <div className={`w-20 h-20  ${isInCart ? 'ml-8' : 'ml-0'}`}>
          <Image
            src={product.image}
            width={100}
            height={100}
            alt={product.name}
            className='w-full'
          />
        </div>
        <div className={`ml-5 ${isInCart ? '' : 'ml-0'}`}>
          <h1 className='text-lg'>{product.name}</h1>
          <div className='flex items-center gap-3 mt-2'>
            <p className='line-through text-textInput'>{product.originalPrice}</p>
            <h3 className='text-lg font-semibold text-primaryBrown'>{product.discountedPrice}</h3>
          </div>
        </div>
      </div>
      <div className='flex gap-5'>
        {isInCart ? (
          <>
            <FaHeart className='text-lg text-primaryBrown hover:scale-110' />
            <FaRegTrashAlt className='text-lg hover:scale-110' />
          </>
        ) : (
          <div className='flex flex-col items-start justify-start gap-5'>
            <button className='px-4 py-1 border rounded-full text-primaryBrown border-primaryBrown hover:bg-brown2 hover:text-white'>
              Add to cart
            </button>
            <div className='flex items-start gap-5'>
              <FaShoppingCart className='text-lg text-primaryBrown hover:scale-110' />
              <FaRegTrashAlt className='text-lg hover:scale-110' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
