'use client';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa6';
import Filter from './components/Filter';
import Pagination from '@/components/Pagination';
import { IoSearch } from 'react-icons/io5';
const page = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <section>
      <Navbar />
      <div className='px-4 md:px-10 mt-[100px] mb-12'>
        {/* search*/}
        <div className='relative flex justify-end'>
          {isOpenModal ? <Filter style='absolute top-16 right-16 md:right-24' /> : ''}
          <button
            className='flex items-center px-2 mr-3 border rounded-lg lg:hidden group hover:bg-brown2 border-primaryBrown'
            onClick={() => setIsOpenModal(!isOpenModal)}
          >
            <FaFilter className='mr-2 text-xl text-primaryBrown group-hover:text-white' />
            <p className='font-medium text-primaryBrown group-hover:text-white'>Filter</p>
          </button>
          <input
            type='text'
            placeholder='Search shoes...'
            className='relative py-2 pl-2 border rounded-md pr-9 border-primaryBrown focus:ring-1 focus:ring-primaryBrown'
          />
          <button className='absolute p-1 rounded-full top-2 right-2 bg-primaryBrown'>
            <IoSearch className='text-white' />
          </button>
        </div>

        <div className='flex gap-[20px] lg:gap-[50px] mt-6 mb-12'>
          <Filter style='hidden lg:inline' />

          {/* all products */}
          <div className='w-full lg:w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className='flex justify-center mb-14'>
          <Pagination />
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default page;
