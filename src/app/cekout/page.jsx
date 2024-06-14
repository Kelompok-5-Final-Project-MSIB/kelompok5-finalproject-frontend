'use client';
import Navbar from '@/src/components/Navbar';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import Address from '@/src/app/cekout/components/EditAddress';

import React from 'react';
import EditAddress from '@/src/app/cekout/components/EditAddress';

const Page = () => {
  return (
    <>
      <Navbar />

      <section>
        <div className='px-4 md:px-10 mt-[50px] mb-4'>
          {' '}
          {/* Adjusted margin-bottom */}
          <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6'>
            <nav
              className='flex mb-4'
              aria-label='Breadcrumb'
            >
              <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
                <li className='inline-flex items-center'>
                  <a
                    href='#'
                    className='inline-flex items-center text-lg font-medium text-gray-700 hover:text-blue-900'
                  >
                    <svg
                      className='w-3 h-3 mr-2.5'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' />
                    </svg>
                    Beranda
                  </a>
                </li>
              </ol>
            </nav>
            <div className='mt-4 mb-4 text-left border border-gray-200 max-w-screen-full lg:mb-2'>
              <a
                href='#'
                className='flex items-center justify-start w-auto h-8 m-2 text-gray-900'
              >
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
                  />
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z'
                  />
                </svg>
                <span className='ml-2'>Alamat Pengirim</span>
              </a>
              <div className='items-center px-4 py-4 sm:flex sm:flex-col lg:grid lg:grid-cols-3 lg:gap-4 lg:px-0'>
                <h4 className='mb-2 text-sm font-normal text-gray-500 lg:ml-6'>
                  Bambang Pamungkas <span>(+6287654321890)</span>
                </h4>
                <h4 className='mb-2 text-sm font-normal text-gray-500 lg:ml-6 lg:text-left'>
                  132 Dartmouth Street Boston
                </h4>
                <EditAddress />
              </div>
            </div>
          </div>
          <div className='border border-gray-200 max-w-screen-full'></div>
        </div>
      </section>
      <section className='max-w-screen-xl px-4 py-8 mx-auto antialiased lg:px-6'>
        {' '}
        {/* Adjusted margin-top */}
        <form
          action='#'
          className='max-w-screen-xl px-4 mx-auto 2xl:px-0'
        >
          <div className='mb-4 text-left border border-gray-200 max-w-screen-full lg:mb-8'>
            <h2 className='mt-2 text-lg font-semibold text-gray-600 lg:ml-6'>Produk Pemesanan</h2>
            <div className='relative overflow-x-auto border-b border-gray-200 dark:border-gray-800'>
              <table className='w-full font-medium text-left text-gray-900 dark:text-white md:table-fixed'>
                <tbody className='divide-y divide-gray-200 dark:divide-gray-800'>
                  <tr>
                    <td className='whitespace-nowrap py-4 md:w-[384px]'>
                      <div className='flex items-center gap-4 lg:ml-6'>
                        <Image
                          src='/nikee.png'
                          alt='Flowbite Logo'
                          width={64}
                          height={64}
                          priority={true}
                          className='object-contain w-full h-full'
                        />
                        <a
                          href='#'
                          className='hover:underline'
                        >
                          Apple iMac 27”
                        </a>
                      </div>
                    </td>
                    <td className='p-4 text-base font-bold text-right text-gray-900 dark:text-white'>Rp. 1.000.000</td>
                  </tr>
                  <tr>
                    <td className='whitespace-nowrap py-4 md:w-[384px]'>
                      <div className='flex items-center gap-4 lg:ml-6'>
                        <Image
                          src='/nikee.png'
                          alt='Flowbite Logo'
                          width={64}
                          height={64}
                          priority={true}
                          className='object-contain w-full h-full'
                        />
                        <a
                          href='#'
                          className='hover:underline'
                        >
                          Apple iPhone 14
                        </a>
                      </div>
                    </td>
                    <td className='p-4 text-base font-bold text-right text-gray-900 dark:text-white'>Rp. 1.000.000</td>
                  </tr>
                  <tr>
                    <td className='whitespace-nowrap py-4 md:w-[384px]'>
                      <div className='flex items-center gap-4 lg:ml-6'>
                        <Image
                          src='/nikee.png'
                          alt='Flowbite Logo'
                          width={64}
                          height={64}
                          priority={true}
                          className='object-contain w-full h-full'
                        />
                        <a
                          href='#'
                          className='hover:underline'
                        >
                          Apple iPad Air
                        </a>
                      </div>
                    </td>
                    <td className='p-4 text-base font-bold text-right text-gray-900 dark:text-white'>Rp. 1.000.000</td>
                  </tr>
                  <tr>
                    <td className='whitespace-nowrap py-4 md:w-[384px]'>
                      <div className='flex items-center gap-4 lg:ml-6'>
                        <Image
                          src='/nikee.png'
                          alt='Flowbite Logo'
                          width={64}
                          height={64}
                          priority={true}
                          className='object-contain w-full h-full'
                        />
                        <a
                          href='#'
                          className='hover:underline'
                        >
                          Xbox Series X
                        </a>
                      </div>
                    </td>
                    <td className='p-4 text-base font-bold text-right text-gray-900 dark:text-white'>Rp. 1.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='mt-4 mr-6 space-y-6 lg:ml-6'>
              <h4 className='text-xl font-semibold text-gray-900 dark:text-white'>Order summary</h4>
              <div className='space-y-4'>
                <div className='space-y-2'>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='text-gray-500 dark:text-gray-400'>Original price</dt>
                    <dd className='text-base font-medium text-gray-900 dark:text-white'>Rp. 1.000.000</dd>
                  </dl>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='text-gray-500 dark:text-gray-400'>Savings</dt>
                    <dd className='text-base font-medium text-green-500'>-Rp. 1.000.000</dd>
                  </dl>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='text-gray-500 dark:text-gray-400'>Total shipping</dt>
                    <dd className='text-base font-medium text-gray-900 dark:text-white'>Rp. 1.000.000</dd>
                  </dl>
                </div>
                <dl className='flex items-center justify-between gap-4 pt-2 border-t border-gray-200 dark:border-gray-700'>
                  <dt className='text-lg font-bold text-gray-900 dark:text-white'>Total Payment</dt>
                  <dd className='text-lg font-bold text-gray-900 dark:text-white'>Rp. 10.000.000</dd>
                </dl>
              </div>
              <div className='flex items-start sm:items-center'>
                <input
                  id='terms-checkbox-2'
                  type='checkbox'
                  value=''
                  className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600'
                />
                <label
                  htmlFor='terms-checkbox-2'
                  className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  {' '}
                  I agree with the{' '}
                  <a
                    href='#'
                    title=''
                    className='underline text-primary-700 hover:no-underline dark:text-primary-500'
                  >
                    Terms and Conditions
                  </a>{' '}
                  of use of the Flowbite marketplace{' '}
                </label>
              </div>
              <div className='gap-4 sm:flex sm:items-center'>
                <button
                  type='button'
                  className='w-full rounded-lg border border-red-200 bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-500 hover:text-gray-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-red-100'
                >
                  Return to Shopping
                </button>
                <button
                  type='submit'
                  className='mt-4 flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 sm:mt-0'
                >
                  Send the order
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Page;
