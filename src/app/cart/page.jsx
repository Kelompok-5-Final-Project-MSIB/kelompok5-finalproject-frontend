import Navbar from '@/src/components/Navbar';
import Image from 'next/image';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaShoppingCart, FaHeart, FaUserCircle } from 'react-icons/fa';

const page = () => {
  return (
    <section>
      <Navbar />

      <div className='px-4 md:px-14 lg:px-28 mt-[100px] mb-12'>
        <h1 className='px-4 text-2xl font-semibold'>Cart</h1>

        <div>
          {/* header */}
          <div className='flex items-center px-4 mt-6'>
            <input
              id='default-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primaryBrown focus:ring-primaryBrown dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />

            <p className='ml-8'>Products</p>
          </div>

          {/* cart */}
          <div className='flex items-start justify-between gap-4 '>
            <div className='w-[60%] grid grid-cols-1 gap-4'>
              <div className='flex items-center justify-between px-4 py-3 shadow-md'>
                <div className='flex items-center'>
                  <input
                    id='default-checkbox'
                    type='checkbox'
                    value=''
                    className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primaryBrown focus:ring-primaryBrown dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />

                  <div className='w-20 h-20 ml-8'>
                    <Image
                      src='/shoes1.png'
                      width={100}
                      height={100}
                      alt='image shoes'
                      className='w-full'
                    />
                  </div>
                  <div className='ml-5'>
                    <h1 className='text-lg'>Nike Airmax 270 react</h1>
                    <div className='flex items-center mt-2'>
                      <p className='line-through text-textInput'>Rp. 1.000.000</p>
                      <h3 className='text-lg font-semibold text-primaryBrown'>Rp. 1.500.000</h3>
                    </div>
                  </div>
                </div>

                <div className='flex gap-5'>
                  <FaHeart className='text-lg text-primaryBrown' />
                  <FaRegTrashAlt className='text-lg' />
                </div>
              </div>
              <div className='flex items-center justify-between px-4 py-3 shadow-md'>
                <div className='flex items-center'>
                  <input
                    id='default-checkbox'
                    type='checkbox'
                    value=''
                    className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primaryBrown focus:ring-primaryBrown dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />

                  <div className='w-20 h-20 ml-8'>
                    <Image
                      src='/shoes1.png'
                      width={100}
                      height={100}
                      alt='image shoes'
                      className='w-full'
                    />
                  </div>
                  <div className='ml-5'>
                    <h1 className='text-lg'>Nike Airmax 270 react</h1>
                    <div className='flex items-center mt-2'>
                      <p className='line-through text-textInput'>Rp. 1.000.000</p>
                      <h3 className='text-lg font-semibold text-primaryBrown'>Rp. 1.500.000</h3>
                    </div>
                  </div>
                </div>

                <div className='flex gap-5'>
                  <FaHeart className='text-lg text-primaryBrown' />
                  <FaRegTrashAlt className='text-lg' />
                </div>
              </div>
              <div className='flex items-center justify-between px-4 py-3 shadow-md'>
                <div className='flex items-center'>
                  <input
                    id='default-checkbox'
                    type='checkbox'
                    value=''
                    className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primaryBrown focus:ring-primaryBrown dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />

                  <div className='w-20 h-20 ml-8'>
                    <Image
                      src='/shoes1.png'
                      width={100}
                      height={100}
                      alt='image shoes'
                      className='w-full'
                    />
                  </div>
                  <div className='ml-5'>
                    <h1 className='text-lg'>Nike Airmax 270 react</h1>
                    <div className='flex items-center mt-2'>
                      <p className='line-through text-textInput'>Rp. 1.000.000</p>
                      <h3 className='text-lg font-semibold text-primaryBrown'>Rp. 1.500.000</h3>
                    </div>
                  </div>
                </div>

                <div className='flex gap-5'>
                  <FaHeart className='text-lg text-primaryBrown' />
                  <FaRegTrashAlt className='text-lg' />
                </div>
              </div>
            </div>

            <div className='w-[35%] px-6 py-3 shadow-lg'>
              <div className='flex items-center justify-between mb-3'>
                <p>Subtotal</p>
                <p>Rp 4.000.000</p>
              </div>
              <div className='flex items-center justify-between mb-3'>
                <p>Discount</p>
                <p>No</p>
              </div>
              <div className='flex items-center justify-between mb-5'>
                <h1 className='text-2xl font-medium'>Total</h1>
                <h1 className='text-2xl font-medium'>Rp 4.000.000</h1>
              </div>
              <button className='w-full px-6 py-3 text-white rounded-lg bg-cream1'>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
