'user client';
import React from 'react';
import Navbar from '@/src/components/Navbar';
// import { FaCartShopping } from 'react-icons/fa6';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
const Page = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>

      <section className=''>
        <div className=' px-4  md:px-10 mt-[50px] mb-12'>
          <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6'>
            <div className='mb-4 text-center max-w-screen-full lg:mb-8'>
              <h1 className='mb-2 text-4xl font-extrabold tracking-tight text-red-800'>Contact Us</h1>
              <h4 className='mb-2 text-sm font-normal text-center text-red-800'>
                Any question? Just write us a message!
              </h4>
            </div>

            <div className='items-center max-w-screen-xl gap-8 px-4 py-8 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
              <div className='p-4 mt-4 rounded-lg md:mt-0 bg-primaryBrown'>
                <h2 className='m-2 mb-1 text-2xl font-semibold tracking-tight text-white'>Contact Information</h2>
                <h2 className='m-2 text-sm font-normal tracking-tight text-white mb-14'>
                  Say something to start a live chat!
                </h2>
                <div className='mb-10 font-light text-gray-500 md:text-lg'>
                  <a
                    href='#'
                    className='flex items-center justify-start w-auto h-8 m-2 text-gray-900 '
                  >
                    <svg
                      className='w-6 h-6 '
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z'
                      />
                    </svg>

                    <span className='ml-2'>+62 8121 4931 661 </span>
                  </a>
                  <a
                    href='#'
                    className='flex items-center justify-start w-auto h-8 m-2 text-white '
                  >
                    <svg
                      className='w-6 h-6 '
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1'
                      />
                    </svg>

                    <span className='ml-2'>reTreads@gmail.com</span>
                  </a>{' '}
                  <a
                    href='#'
                    className='flex items-center justify-start w-auto h-8 m-2 text-white '
                  >
                    <svg
                      className='w-6 h-6 '
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
                      />
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z'
                      />
                    </svg>

                    <span className='ml-2'>132 Dartmouth Street Boston</span>
                  </a>
                </div>

                <div className='flex w-full sm:items-start'>
                  <div className='flex mt-4 sm:justify-center sm:mt-0'>
                    <a
                      href='#'
                      className='flex items-center justify-center w-8 h-8 m-2 text-gray-900 bg-white rounded-full hover:text-gray-900 dark:hover:text-white'
                    >
                      <svg
                        className='w-6 h-6 '
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fill='currentColor'
                          fillRule='evenodd'
                          d='M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z'
                          clipRule='evenodd'
                        />
                      </svg>

                      <span className='sr-only'>instagram page</span>
                    </a>

                    <a
                      href='#'
                      className='flex items-center justify-center w-8 h-8 m-2 text-gray-900 bg-white rounded-full hover:text-gray-900 dark:hover:text-white'
                    >
                      <svg
                        className='w-6 h-6'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fillRule='evenodd'
                          d='M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z'
                          clipRule='evenodd'
                        />
                      </svg>

                      <span className='sr-only'>Twitter page</span>
                    </a>

                    <a
                      href='#'
                      className='flex items-center justify-center w-8 h-8 m-2 text-gray-900 bg-white rounded-full hover:text-gray-900 dark:hover:text-white'
                    >
                      <svg
                        className='w-4 h-4'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 8 19'
                      >
                        <path
                          fillRule='evenodd'
                          d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className='sr-only'>Facebook page</span>
                    </a>
                  </div>
                  <div className='flex items-start justify-end w-full p-0 m-0'>
                    <Image
                      src='/dcontact.png'
                      alt='Logo'
                      width={500}
                      height={500}
                      className='w-[60%] md:w-[40%] lg:w-[24%] p-0 m-0'
                    />
                  </div>
                </div>
              </div>

              <div>
                <form className='mb-6'>
                  <div className='mb-6'>
                    <label
                      htmlFor='email'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Name
                    </label>
                    <input
                      type='email'
                      id='email'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
                      placeholder='Username'
                      required
                    />
                  </div>
                  <div className='grid md:grid-cols-2 md:gap-6'>
                    <div className='relative z-0 w-full mb-5 group'>
                      <input
                        type='tel'
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                        name='floating_phone'
                        id='floating_phone'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=''
                        required
                      />
                      <label
                        htmlFor='floating_phone'
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                      >
                        Phone number (+62)
                      </label>
                    </div>
                    <div className='relative z-0 w-full mb-5 group'>
                      <input
                        type='text'
                        name='floating_company'
                        id='floating_company'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                        required
                      />
                      <label
                        htmlFor='floating_company'
                        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                      >
                        Email (.@gmail.com)
                      </label>
                    </div>
                  </div>
                  <div className='mb-6'>
                    <label
                      htmlFor='message'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Your message
                    </label>
                    <textarea
                      id='message'
                      rows='4'
                      className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 '
                      placeholder='Your message...'
                    ></textarea>
                  </div>
                  <button
                    type='submit'
                    className='text-white bg-primaryBrown hover:bg-brown2 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2  focus:outline-none block'
                  >
                    Send message
                  </button>
                </form>
              </div>
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

export default Page;
