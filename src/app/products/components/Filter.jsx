'use client';
import { getAllProduct, getBrand, productSelector } from '@/src/utils/slices/productSlice';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Filter = ({ style, token, updateFilters }) => {
  const { brands } = useSelector(productSelector);
  const dispatch = useDispatch();

  // console.log(brands);
  useEffect(() => {
    dispatch(getBrand({ token }));
  }, [dispatch, token]);
  return (
    <>
      <div className={`${style} px-4 py-2 bg-cream1 w-[80%] md:w-[50%] lg:w-[25%] h-fit rounded-lg shadow-lg`}>
        {/* filter */}
        <div className='mb-4'>
          <h1 className='text-lg font-semibold'>Filter</h1>
          <div className='flex items-center mt-3'>
            <input
              id='default-checkbox'
              type='checkbox'
              value=''
              className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primaryBrown focus:ring-primaryBrown dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            <label
              htmlFor='default-checkbox'
              className='text-sm font-medium text-gray-900 ms-2 dark:text-gray-300'
            >
              Paling Baru
            </label>
          </div>
        </div>
        <div>
          <h1 className='text-lg font-semibold'>Brand</h1>
          <div className='mt-2'>
            {brands?.map((brand, index) => (
              <button
                className='flex w-full justify-between mt-1.5 hover:bg-cream2'
                key={index}
                onClick={() => updateFilters({ brand: brand.brand })}
              >
                <p>{brand.brand}</p>
                <p className='text-textInput'>{brand.total}</p>
              </button>
            ))}
          </div>
        </div>

        {/* button delete */}
        <div className='flex justify-center mt-8 mb-8'>
          <button
            className='font-semibold text-center text-white'
            onClick={() => updateFilters({ brand: '', search: '', page: 1 })}
          >
            Hapus Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
