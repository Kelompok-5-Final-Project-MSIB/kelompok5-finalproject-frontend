import Navbar from '@/src/components/Navbar';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const page = () => {
  return (
    <section>
      <Navbar />

      <div className='px-4 md:px-14 mt-[100px] mb-12'>
        <h1 className='text-2xl font-semibold'>Cart</h1>

        <div></div>
      </div>
    </section>
  );
};

export default page;
