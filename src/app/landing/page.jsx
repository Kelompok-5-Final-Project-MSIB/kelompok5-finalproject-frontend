'use client';
import Image from 'next/image';
import React from 'react';
import Navbar from '@/components/Navbar';
import Category from './components/Category';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

const page = () => {
 
 return (
    <>
    <section>
        <Navbar transparent />
    </section>
    <section class="bg-cream2 dark:bg-gray-900">
    {/* <div className='px-4 md:px-10 mt-[100px] mb-12'> */}
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h2 class="max-w-lg mb-4 text-lg font-semibold text-white tracking-tight leading-none md:text-lg xl:text-lg dark:text-white">NEW  COLLECTION  FOR  SNEAKERS</h2>
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sneakers And
Athletic Shoes</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
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
    {/* </div> */}
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

<section className='bg-cream1'>
<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Adidas Men Running
Sneakers</h1>
            <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Performance and design. Taken right to the edge.</p>
          
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Image
            src='/shoestengah.png'
            alt='Logo'
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
            className='w-[100%] md:w-[80%] lg:w-[58%]'
           />
           </a>
              </div>
              <h3 class="mb-2 text-center text-xl font-bold text-gray-800">FAST DELIVERY</h3>   
              <h4 class="mb-2 text-center text-sm font-normal text-gray-800">FREE SHIPPING</h4>   
              </div>
<div>
              <div  class="flex justify-center items-center">
                <a href=""  className='flex items-center justify-center'>
              <Image
            src='/refund.png'
            alt='Flowbite Logo'
            width={500}
            height={500}
            className='w-[100%] md:w-[80%] lg:w-[58%]'
           />
           </a>
              </div>
              <h3 class="mb-2 text-center text-xl font-bold text-gray-800">FREE SHIPPING</h3>   
              <h4 class="mb-2 text-center text-sm font-normal text-gray-800">FREE SHIPPING</h4>   
              </div>
<div>
              <div  class="flex justify-center items-center">
                <a href=""  className='flex items-center justify-center'>
              <Image
            src='/support.png'
            alt='Flowbite Logo'
            width={500}
            height={500}
            className='w-[100%] md:w-[80%] lg:w-[58%]'
           />
           </a>
              </div>
              <h3 class="mb-2 text-center text-xl font-bold text-gray-800">FREE SHIPPING</h3>   
              <h4 class="mb-2 text-center text-sm font-normal text-gray-800">FREE SHIPPING</h4>   
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