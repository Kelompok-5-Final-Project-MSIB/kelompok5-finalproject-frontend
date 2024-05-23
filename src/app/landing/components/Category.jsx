import React from 'react';
import Image from 'next/image';
const category = () => {

  return (
    <>
    <div>
              <div  class="flex justify-center items-center">
                <a href=""  className='flex items-center justify-center'>
              <Image
            src='/Nike.png'
            alt='Flowbite Logo'
            width={500}
            height={500}
            className='w-[80%] md:w-[60%] lg:w-[48%]'
           />
           </a>
              </div>
              <h3 class="mb-4 text-center text-xl font-bold text-gray-800">Nike</h3>              
          </div>
          </>
  );
};

export default category;
