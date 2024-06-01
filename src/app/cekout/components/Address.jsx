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
          <div className='relative p-4 w-full max-w-screen-xl max-h-full'>
            <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
              <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-lg text-center font-semibold text-gray-900 dark:text-white'>New Address</h3>
                <button
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
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
                <div className='relative p-4 grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5'>
                  <div className='sm:col-span-2'>
                    <label
                      for='name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                      value=''
                      placeholder='User Name'
                      required=''
                    ></input>
                  </div>
                  <div className='w-full'>
                    <label
                      for='brand'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Email
                    </label>
                    <input
                      type='text'
                      name='brand'
                      id='brand'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                      value=''
                      placeholder='Email'
                      required=''
                    ></input>
                  </div>
                  <div className='w-full'>
                    <label
                      for='brand'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Mobile Phone
                    </label>
                    <input
                      type='text'
                      name='brand'
                      id='brand'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                      value=''
                      placeholder='(+62)'
                      required=''
                    ></input>
                  </div>
                  <div className='w-full'>
                    <label
                      for='brand'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Address For Delivery
                    </label>
                    <input
                      type='text'
                      name='brand'
                      id='brand'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                      value=''
                      placeholder='Address'
                      required=''
                    ></input>
                  </div>
                  <div className='sm:col-span-2'>
                    <label
                      for='description'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Detail Address
                    </label>
                    <textarea
                      id='description'
                      rows='8'
                      className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                      value=''
                      placeholder='Write a product description here...'
                    ></textarea>
                  </div>
                </div>
                <div className='relative p-4 flex items-center space-x-4'>
                  <button
                    type='submit'
                    className='text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800'
                  >
                    Update Address
                  </button>
                  <button
                    type='button'
                    className='text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
                  >
                    <svg
                      className='w-5 h-5 mr-1 -ml-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                        clip-rule='evenodd'
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
