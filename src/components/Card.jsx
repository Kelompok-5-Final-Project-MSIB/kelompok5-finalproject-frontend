import Image from 'next/image';
import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';

const Card = () => {
  return (
    <>
      <div className='max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700'>
        <a
          href='#'
          className='flex items-center justify-center shadow-lg'
        >
          <Image
            className='rounded-t-lg w-[70%]'
            src='/shoes1.png'
            width={500}
            height={500}
            priority={false}
            alt='shoes'
          />
        </a>
        <div className='p-5'>
          <a href='#'>
            <h1 className='mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white'>Xiphone 14 Pro Maxe</h1>
          </a>
          <h3 className='flex justify-between mb-3'>
            <p className='text-base text-sm font-semibold'>Rp. 1.000.000</p>
            <p className='text-base text-sm line-through text-textInput'>Rp. 1.500.000</p>
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
