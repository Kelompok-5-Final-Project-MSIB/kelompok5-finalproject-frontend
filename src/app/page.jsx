'use client';
import { useReportWebVitals } from 'next/web-vitals';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Navbar from '@/src/components/Navbar';
import Category from '@/src/components/Category';
import Card from '@/src/components/Card';
import Footer from '@/src/components/Footer';
import { FaCartShopping } from 'react-icons/fa6';
import { productSelector, getAllProduct, clearState, setCurrentPage } from '@/src/utils/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonProduct from '@/src/components/skeleton/SkeletonProduct';

const merk = [
  {
    name: 'Nike',
    image: '/Nike.png',
  },
  {
    name: 'Puma',
    image: '/puma.png',
  },
  {
    name: 'Reebok',
    image: '/reebok.png',
  },
  {
    name: 'Vans',
    image: '/vans.png',
  },
  {
    name: 'Converse',
    image: '/converse.png',
  },
  {
    name: 'Adidas',
    image: '/adidas.png',
  },
  {
    name: 'Other',
    image: '/other.png',
  },
];

const page = () => {
  // useReportWebVitals((metric) => {
  //   console.log(metric);
  // });
  const { isLoading, product, currentPage } = useSelector(productSelector);
  const dispatch = useDispatch();
  const fetchProducts = () => {
    dispatch(getAllProduct({ current: currentPage }));
  };

  useEffect(() => {
    dispatch(clearState());
    fetchProducts();
  }, []);
  const products = product.data;

  return (
    <>
      <section>
        <Navbar />
      </section>
      <section className='bg-cream2 dark:bg-gray-900'>
        <div className='bg-cream2 px-4  md:px-10 mt-[50px] mb-12'>
          <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
            <div className='mr-auto place-self-center lg:col-span-7'>
              <h2 className='max-w-lg mb-4 text-lg font-semibold leading-none tracking-tight text-white md:text-lg xl:text-lg '>
                NEW COLLECTION FOR SNEAKERS
              </h2>
              <h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl '>
                Sneakers And Athletic Shoes
              </h1>
              <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl '>
                Dapatkan sepatu dengan desain terkini dan teknologi terbaru yang siap mendukung aktivitas Anda. Jangan
                lewatkan kesempatan untuk tampil stylish dan sporty dengan pilihan sepatu terbaru yang baru saja tiba!
              </p>
              <a
                href='#'
                className='inline-flex items-center px-6 py-4 text-base font-normal text-center text-white bg-transparent border rounded-lg bg-cream2 hover:bg-cream1 group hover:text-white focus:ring-2 focus:outline-none focus:ring-primaryBrown '
              >
                <span className='mr-2'>
                  <FaCartShopping className='text-white group-hover:text-white' />
                </span>
                Shop Now
              </a>
            </div>
            <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
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
        <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6'>
          <div className='mb-8 text-center max-w-screen-full lg:mb-16'>
            <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900'>
              What <span className='text-yellow-700'>We</span> Provide?
            </h2>
          </div>
          <div className='space-y-8 md:grid md:grid-cols-4 lg:grid-cols-7 md:gap-12 md:space-y-0'>
            {merk.map((merk) => (
              <Category
                key={merk.name}
                {...merk}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6'>
          <div className='mb-8 text-left max-w-screen-full lg:mb-16 lg:grid-cols-2'>
            <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-gray-900'>
              New <span className='text-yellow-700'>Arrival</span> For You
            </h2>
          </div>
          <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0'>
            {isLoading ? (
              <>
                <div className='flex flex-col gap-5 md:flex-row lg:flex-row'>
                  <SkeletonProduct />
                  <SkeletonProduct />
                  <SkeletonProduct />
                  <SkeletonProduct />
                </div>
              </>
            ) : (
              products?.map((prod) => (
                <Card
                  key={prod.id}
                  {...prod}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <section className='relative bg-cream1'>
        <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl '>
              Adidas Men Running Sneakers
            </h1>
            <p className='max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl '>
              Performance and design. Taken right to the edge.
            </p>
          </div>
          <div className='absolute top-0 right-0 hidden -mt-12 lg:flex lg:col-span-5'>
            <Image
              src='/shoestengah.png'
              alt='Adidas Men Running Sneakers'
              width={500}
              height={500}
              className='w-[200%] md:w-[160%] lg:w-[88%]'
            />
          </div>
        </div>
      </section>

      <section>
        <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6'>
          <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
            <div>
              <div className='flex items-center justify-center'>
                <a
                  href=''
                  className='flex items-center justify-center'
                >
                  <Image
                    src='/Shipping.png'
                    alt='Flowbite Logo'
                    width={500}
                    height={500}
                    className='mb-4 w-[100%] md:w-[80%] lg:w-[58%]'
                  />
                </a>
              </div>
              <h3 className='mb-2 text-xl font-bold text-center text-gray-800'>FAST DELIVERY</h3>
              <h4 className='mb-2 text-sm font-normal text-center text-gray-800'>
                Nikmati fast dalivery untuk setiap pembelian di toko kami tanpa minimum order!!
              </h4>
            </div>
            <div>
              <div className='flex items-center justify-center'>
                <a
                  href=''
                  className='flex items-center justify-center'
                >
                  <Image
                    src='/refund.png'
                    alt='Flowbite Logo'
                    width={500}
                    height={500}
                    className='mb-4 w-[100%] md:w-[80%] lg:w-[58%]'
                  />
                </a>
              </div>
              <h3 className='mb-2 text-xl font-bold text-center text-gray-800'>100% REFUND</h3>
              <h4 className='mb-2 text-sm font-normal text-center text-gray-800'>
                Belanja tanpa khawatir dengan jaminan 100% refund!Kepuasan Anda adalah prioritas kami!
              </h4>
            </div>
            <div>
              <div className='flex items-center justify-center'>
                <a
                  href=''
                  className='flex items-center justify-center'
                >
                  <Image
                    src='/support.png'
                    alt='Flowbite Logo'
                    width={500}
                    height={500}
                    className='mb-4 w-[100%] md:w-[80%] lg:w-[58%]'
                  />
                </a>
              </div>
              <h3 className='mb-2 text-xl font-bold text-center text-gray-800'>SUPPORT 24/7</h3>
              <h4 className='mb-2 text-sm font-normal text-center text-gray-800'>
                Tim kami siap membantu Anda kapan saja, di mana saja, untuk memastikan kepuasan dan kenyamanan Anda
                dalam berbelanja.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default page;
