import Input from '@/src/components/Input';
import React from 'react';

const Address = () => {
  return (
    <>
      <section className='lg:ml-auto'>
        <button
          data-modal-target='crud-modal'
          data-modal-toggle='crud-modal'
          className='text-white bg-amber-500 border-2 border-amber-500 hover:bg-amber-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-cream2 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center lg:ml-auto lg:mr-6 mt-2 sm:mt-4 lg:mt-0'
          type='button'
        >
          <svg
            className='w-6 h-6 mr-2 '
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
          <span>Edit Address</span>
        </button>

        <div
          id='crud-modal'
          tabindex='-1'
          aria-hidden='true'
          className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
        >
          <div className='relative w-full max-w-screen-xl max-h-full p-4'>
            <div className='relative z-50 bg-white rounded-lg shadow-lg'>
              <div className='flex items-center justify-between p-4 border-b rounded-t md:p-5 '>
                <h3 className='text-lg font-semibold text-center text-primaryBrown '>New Address</h3>
                <button
                  type='button'
                  className='inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 '
                  data-modal-toggle='crud-modal'
                >
                  <svg
                    className='w-3 h-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                    />
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </div>
              <form action='#'>
                <div className='relative grid gap-4 p-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5'>
                  <div className='w-full'>
                    <Input
                      placeholder={'Province'}
                      name={'province'}
                      type='text'
                    />
                  </div>

                  <div className='w-full'>
                    <Input
                      placeholder={'city'}
                      name={'city'}
                      type='text'
                    />
                  </div>
                  <div className='w-full'>
                    <Input
                      placeholder={'zip code'}
                      name={'zip_code'}
                      type='text'
                    />
                  </div>
                  <div className='w-full'>
                    <Input
                      placeholder={'shopping cost'}
                      name={'shopping_cost'}
                      type='text'
                    />
                  </div>
                  <div className='sm:col-span-2'>
                    <Input
                      placeholder={'detail address'}
                      name={'detail_adress'}
                      type='textarea'
                    />
                  </div>
                </div>
                <div className='relative flex items-center p-4 space-x-4'>
                  <button
                    type='submit'
                    className='text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800'
                  >
                    Update Address
                  </button>
                  <button
                    type='button'
                    className='text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500  dark:hover:bg-red-600 dark:focus:ring-red-900'
                  >
                    <svg
                      className='w-5 h-5 mr-1 -ml-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Address;
