import React from 'react';
import Image from 'next/image';
const category = ({ image, name }) => {
  return (
    <>
      <div>
        <div className='flex items-center justify-center'>
          <Image
            src={image}
            alt='Flowbite Logo'
            width={500}
            height={500}
            className='w-[85%] md:w-[60%] lg:w-[48%]'
          />
        </div>
        <h3 className='mb-4 text-xl font-bold text-center text-gray-800'>{name}</h3>
      </div>
    </>
  );
};

export default category;
