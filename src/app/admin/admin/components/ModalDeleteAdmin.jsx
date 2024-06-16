import React from 'react';

function ModalDeleteAdmin({ handleCloseModal }) {
  return (
    <>
      <div
        id='popup-modal-delete'
        tabIndex='-1'
        className='fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-gray-800 bg-opacity-50'
      >
        <div className='relative w-full h-full max-w-md p-4 md:h-auto'>
          <div className='relative bg-white rounded-lg shadow'>
            <button
              type='button'
              onClick={handleCloseModal}
              className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center'
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
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
            <div className='p-4 text-center md:p-5'>
              <svg
                className='w-12 h-12 mx-auto mb-4 text-red-600'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                />
              </svg>
              <h3 className='mb-5 font-normal text-gray-500 text-md'>
                Apakah kamu yakin menghapus <span className='font-medium'>data ini</span>?
              </h3>
              <button
                onClick={handleCloseModal}
                className='inline-flex items-center px-5 py-2 mr-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300'
              >
                Ya, saya yakin
              </button>
              <button
                onClick={handleCloseModal}
                className='px-5 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 hover:text-gray-900 focus:z-10'
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDeleteAdmin;
