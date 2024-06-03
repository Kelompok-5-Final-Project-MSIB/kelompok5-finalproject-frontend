import React from 'react';

const SkeletonCart = () => {
  return (
    <div className='flex flex-col items-center justify-between p-4 mb-4 shadow-md md:flex-row'>
      <div className='flex items-center'>
        <div className='w-20 h-20 mr-4 bg-gray-300 rounded-full'></div>
        <div>
          <div className='w-40 h-4 mb-2 bg-gray-300 rounded'></div>
          <div className='w-32 h-3 bg-gray-300 rounded'></div>
        </div>
      </div>
      <div className='flex items-center mt-4 md:mt-0'>
        <div className='w-8 h-8 mr-4 bg-gray-300 rounded-full'></div>
        <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
      </div>
    </div>
  );
};

export default SkeletonCart;
