import Image from 'next/image';
import React from 'react';

export const SidebarAuth = () => {
  return (
    <div className='lg:w-1/2 w-full py-12 px-6 lg:min-h-screen h-auto bg-cover bg-center bg-no-repeat bg-[url("/image_sidebar.png")] flex flex-col items-center justify-center'>
      <Image
        src='/logo_retreads.png'
        alt='logo'
        width={200}
        height={300}
        priority={false}
        className='w-25 lg:w-[40%]'
      />
      <p className='-mt-5 text-lg font-semibold leading-normal text-center text-white lg:text-xl w-96'>
        Vintage Vibes, Modern Steps!
      </p>
    </div>
  );
};
