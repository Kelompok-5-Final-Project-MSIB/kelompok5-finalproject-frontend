import React from 'react';

const SkeletonDetailProduct = () => {
  return (
    <>
      <div className='px-4 md:px-14 mt-[100px] mb-12 animate-pulse'>
        <button className='flex items-center font-semibold text-primaryBrown'>
          <span className='w-6 h-6 mr-2 bg-gray-300 rounded-full'></span>
          <span className='w-32 h-6 bg-gray-300 rounded'></span>
        </button>
        <div className='flex items-start gap-8 mt-6'>
          <div className='flex items-center gap-3.5'>
            <div className='flex flex-col gap-3.5'>
              <div className='w-24 h-24 bg-gray-300 rounded'></div>
              <div className='w-24 h-24 bg-gray-300 rounded'></div>
              <div className='w-24 h-24 bg-gray-300 rounded'></div>
            </div>
            <div className='bg-gray-300 rounded w-80 h-80'></div>
          </div>
          <div className='pr-20'>
            <div className='w-64 h-8 bg-gray-300 rounded'></div>
            <div className='w-32 h-6 mt-2 bg-gray-300 rounded'></div>
            <hr className='h-px my-4 bg-gray-300 border-0'></hr>
            <div className='h-16 mb-3 bg-gray-300 rounded'></div>
            <div className='flex mt-4'>
              <div className='px-10 py-2 mr-3 bg-gray-300 border rounded-lg'></div>
              <div className='px-10 py-2 bg-gray-300 border rounded-lg'></div>
            </div>
            <hr className='h-px my-5 bg-gray-300 border-0'></hr>
          </div>
        </div>
        <div className='px-20'>
          <div className='w-64 h-10 bg-gray-300 rounded-md mt-14'></div>
          <hr className='h-px mt-4 bg-gray-300 border-0'></hr>
          <div className='h-32 py-6 bg-gray-300 rounded'></div>
        </div>
      </div>
    </>
  );
};

export default SkeletonDetailProduct;
