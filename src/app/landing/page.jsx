'use client';
import Image from 'next/image';
import React from 'react';
import Navbar from '@/components/Navbar';
import Category from './components/Category';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import { FaCartShopping } from 'react-icons/fa6';

const page = () => {
 
 return (
    <>
    <section>
        <Navbar />
    </section>
    <section class="bg-cream2 dark:bg-gray-900">
    <div className='bg-cream2 px-4  md:px-10 mt-[50px] mb-12'>
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h2 class="max-w-lg mb-4 text-lg font-semibold text-white tracking-tight leading-none md:text-lg xl:text-lg dark:text-white">NEW  COLLECTION  FOR  SNEAKERS</h2>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sneakers And
Athletic Shoes</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Dapatkan sepatu dengan desain terkini dan teknologi terbaru yang siap mendukung aktivitas Anda. Jangan lewatkan kesempatan untuk tampil stylish dan sporty dengan pilihan sepatu terbaru yang baru saja tiba!</p>
            <a
            href='#'
            className='inline-flex items-center px-6 py-4 text-base font-normal text-center bg-transparent border rounded-lg text-white bg-cream2 hover:bg-cream1 group hover:text-white focus:ring-2 focus:outline-none focus:ring-primaryBrown '
          >
            <span className='mr-2'>
              <FaCartShopping className='text-white group-hover:text-white' />
            </span>
            Shop Now 
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Image
            src='/header.png'
            alt='Logo'
            width={500}
            height={500}
            className='w-[200%] md:w-[160%] lg:w-[88%]'
          />
        </div>                
    </div>
    </div>
</section>
<section>
<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
<div class="max-w-screen-full mb-8 lg:mb-16 text-center">
<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">What <span className='text-yellow-700'>We</span> Provide?</h2>
</div>
<div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-7 md:gap-12 md:space-y-0">
          <Category/>
          <Category/>
          <Category/>
          <Category/>
          <Category/>
          <Category/>
          <Category/>
          </div>
</div>
</section>
<section>
<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
<div class="max-w-screen-full mb-8 lg:mb-16 lg:grid-cols-2 text-left">
<h2 class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900">New <span className='text-yellow-700'>Arrival</span> For You</h2>
</div>
<div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </div>
</section>

<section className="relative bg-cream1">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Adidas Men Running Sneakers
      </h1>
      <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        Performance and design. Taken right to the edge.
      </p>
    </div>
    <div className="absolute top-0 right-0 -mt-12 hidden lg:flex lg:col-span-5">
      <Image
        src="/shoestengah.png"
        alt="Adidas Men Running Sneakers"
        width={500}
        height={500}
        className="w-[200%] md:w-[160%] lg:w-[88%]"
      />
    </div>
  </div>
</section>

<section>
<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
<div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
<div>
              <div  class="flex justify-center items-center">
                <a href=""  className='flex items-center justify-center'>
              <Image
            src='/Shipping.png'
            alt='Flowbite Logo'
            width={500}
            height={500}
            className='mb-4 w-[100%] md:w-[80%] lg:w-[58%]'
           />
           </a>
              </div>
              <h3 class="mb-2 text-center text-xl font-bold text-gray-800">FAST DELIVERY</h3>   
              <h4 class="mb-2 text-center text-sm font-normal text-gray-800">Nikmati fast dalivery untuk setiap pembelian di toko kami tanpa minimum order!!</h4>   
              </div>
<div>
              <div  class="flex justify-center items-center">
                <a href=""  className='flex items-center justify-center'>
              <Image
            src='/refund.png'
            alt='Flowbite Logo'
            width={500}
            height={500}
            className='mb-4 w-[100%] md:w-[80%] lg:w-[58%]'
           />
           </a>
              </div>
              <h3 class="mb-2 text-center text-xl font-bold text-gray-800">100% REFUND</h3>   
              <h4 class="mb-2 text-center text-sm font-normal text-gray-800">Belanja tanpa khawatir dengan jaminan 100% refund!Kepuasan Anda adalah prioritas kami!</h4>   
              </div>
<div>
              <div  class="flex justify-center items-center">
                <a href=""  className='flex items-center justify-center'>
              <Image
            src='/support.png'
            alt='Flowbite Logo'
            width={500}
            height={500}
            className='mb-4 w-[100%] md:w-[80%] lg:w-[58%]'
           />
           </a>
              </div>
              <h3 class="mb-2 text-center text-xl font-bold text-gray-800">SUPPORT 24/7</h3>   
              <h4 class="mb-2 text-center text-sm font-normal text-gray-800">Tim kami siap membantu Anda kapan saja, di mana saja, untuk memastikan kepuasan dan kenyamanan Anda dalam berbelanja.</h4>   
              </div>
    </div>
    </div>
    
</section>
    <section>
      
    <Footer/>
    
    </section>
    </>
 )
};

export default page;