'use client';
import { useSession } from 'next-auth/react';
import { FaRegUserCircle } from 'react-icons/fa';
import React from 'react';

function NavbarAdmin() {
  const { data: session } = useSession();
  const name = session?.user?.name;
  return (
    <nav className='flex items-center justify-between px-4 py-5 bg-white shadow-md bg-neutral-01 md:px-12 text-primaryBrown'>
      <div className='flex items-center justify-between lg:justify-end'>
        <div className='flex flex-col items-center justify-center px-1 py-1 text-2xl text-white dark:bg-orange-06 rounded-2xl md:py-3 md:px-4 bg-orange-05 hover:scale-95'>
          {/* <DarkModeButton /> */}
        </div>
      </div>
      <div className='flex items-center font-semibold text-center text-primary-dark-blue xl:text-xl md:text-lg'>
        <FaRegUserCircle className='mr-2 text-3xl' />
        <p>Hi, {name}!</p>
      </div>
    </nav>
  );
}

export default NavbarAdmin;
