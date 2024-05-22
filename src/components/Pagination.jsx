import React from 'react';

const Pagination = () => {
  return (
    <>
      <nav aria-label='Page navigation example'>
        <ul className='flex items-center h-8 -space-x-px text-base'>
          <li>
            <a
              href='#'
              className='flex items-center justify-center h-10 px-3 leading-tight bg-white border border-gray-300 text-black2 hover:bg-gray-100 hover:text-primaryBrown '
            >
              1
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center h-10 px-3 leading-tight bg-white border border-gray-300 text-black2 hover:bg-gray-100 hover:text-primaryBrown '
            >
              2
            </a>
          </li>
          <li>
            <a
              href='#'
              aria-current='page'
              className='z-10 flex items-center justify-center h-10 px-3 leading-tight text-white bg-cream1 hover:bg-cream2 hover:text-black '
            >
              3
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center h-10 px-3 leading-tight bg-white border border-gray-300 text-black2 hover:bg-gray-100 hover:text-primaryBrown '
            >
              3
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center h-10 px-3 leading-tight bg-white border border-gray-300 text-black2 hover:bg-gray-100 hover:text-primaryBrown '
            >
              4
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
