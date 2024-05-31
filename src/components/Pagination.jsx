import React from 'react';

const Pagination = ({ currentPage, pages, handlePageChange }) => {
  return (
    <>
      <nav aria-label='Page navigation example'>
        <ul className='flex items-center h-8 -space-x-px text-base'>
          {pages?.map((page) => (
            <li key={page}>
              <button
                onClick={() => handlePageChange(page)}
                className={`z-10 flex items-center justify-center h-10 px-3 leading-tight  hover:bg-cream2 hover:text-black ${
                  currentPage === page
                    ? 'bg-cream2 text-white'
                    : ' bg-white text-black border border-gray-300 hover:bg-gray-100 hover:text-primaryBrown'
                }`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
