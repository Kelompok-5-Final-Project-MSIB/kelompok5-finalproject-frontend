import Navbar from '@/src/components/Navbar';
import ProductCard from '@/src/components/ProductCard';
import Image from 'next/image';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaShoppingCart, FaHeart, FaUserCircle } from 'react-icons/fa';

const products = [
  {
    name: 'Nike Airmax 270 react',
    originalPrice: 'Rp. 1.000.000',
    discountedPrice: 'Rp. 1.500.000',
    image: '/shoes1.png',
  },
  {
    name: 'Nike Airmax 270 react',
    originalPrice: 'Rp. 1.000.000',
    discountedPrice: 'Rp. 1.500.000',
    image: '/shoes1.png',
  },
  {
    name: 'Nike Airmax 270 react',
    originalPrice: 'Rp. 1.000.000',
    discountedPrice: 'Rp. 1.500.000',
    image: '/shoes1.png',
  },
  // Tambahkan produk lainnya di sini
];

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
          <div className='flex flex-col items-start justify-between gap-4 lg:flex-row'>
            <div className='w-[60%] md:w-full grid grid-cols-1 gap-4'>
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  isInCart={true}
                />
              ))}
            </div>
            <div className='lg:w-[35%] w-full px-6 py-3 shadow-lg'>
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
