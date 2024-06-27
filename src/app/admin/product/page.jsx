'use client';
import { productSelector, getAllProduct, clearState, setCurrentPage } from '@/src/utils/slices/productSlice';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LuRefreshCcw } from 'react-icons/lu';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const ProductList = dynamic(() => import('./components/ProductList'), {
  ssr: false,
  loading: () => <p className='mb-10 text-2xl font-semibold text-center animate-pulse'>Loading...</p>,
});

const Pagination = dynamic(() => import('@/src/components/Pagination'), {
  ssr: false,
  loading: () => (
    <p className='absolute text-2xl font-semibold text-center bottom-[400px] left-[500px] animate-pulse'>Loading...</p>
  ),
});

function page() {
  const { data: session } = useSession();
  const [nameProduct, setNameProduct] = useState('');
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoading, product, currentPage } = useSelector(productSelector);
  const products = product.data;
  const pages = Array.from({ length: Math.ceil(product.total / product.per_page) }, (_, i) => i + 1);
  const search = searchParams.get('search') || '';
  const token = session?.user?.accessToken;
  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(getAllProduct({ current: page, name: search }));
    router.push(`/admin/product?page=${page}&search=${search}`, { scroll: false });
  };
  const handleSearch = (e) => {
    setNameProduct(e.target.value);
    router.push(`/admin/product?page=${currentPage}&search=${nameProduct}`, { scroll: false });
    dispatch(getAllProduct({ current: currentPage, name: search, token }));
    if (!e.target.value) {
      router.push(`/admin/product?page=${currentPage}`, { scroll: false });
    }
  };

  const handleRefreshCourse = () => {
    setNameProduct('');
    router.push(`/admin/product?page=${currentPage}`, { scroll: false });
    dispatch(getAllProduct({ current: currentPage, name: search, token }));
  };

  useEffect(() => {
    if (token) {
      dispatch(getAllProduct({ current: currentPage, name: search, token }));
    }
    dispatch(clearState());
  }, [token, search, currentPage, dispatch]);

  return (
    <section className='px-4 mt-12 lg:px-10'>
      <h1 className='text-2xl font-bold'>Product</h1>
      <div className='h-screen mt-4 overflow-x-auto md:mt-6'>
        <div className='relative overflow-hidden bg-white rounded-lg shadow-md sm:rounded-lg'>
          <div className='flex flex-col items-center justify-between p-4 space-y-3 bg-cream1 md:flex-row md:space-y-0 md:space-x-4'>
            <div className='flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3'>
              <h2 className='text-xl font-semibold text-white'>DAFTAR PRODUCT</h2>
            </div>

            <div className='w-full md:w-1/2'>
              <form className='flex items-center'>
                <label
                  htmlFor='simple-search'
                  className='sr-only'
                >
                  Search
                </label>
                <div className='relative w-full'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 text-gray-500 dark:text-gray-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <input
                    type='text'
                    name='keyword'
                    id='simple-search'
                    className='block w-full p-2 pl-10 mr-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-blue-900'
                    placeholder='Cari Sepatu'
                    onChange={handleSearch}
                    value={nameProduct}
                  ></input>
                </div>
                <a
                  href='/admin/product/create'
                  type='button'
                  className='flex items-center justify-center px-4 py-2 ml-4 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-red-300'
                >
                  <svg
                    className='h-3.5 w-3.5 mr-2'
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
                      d='M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                  Tambah
                </a>
                <LuRefreshCcw
                  size={30}
                  className={`mr-3 cursor-pointer text-primaryBrown cursorPointer ml-2`}
                  onClick={handleRefreshCourse}
                />
              </form>
            </div>
          </div>
          <div className='overflow-x-auto'>
            <table
              id='user-table'
              className='w-full text-sm text-left text-gray-500'
            >
              <thead className='text-xs uppercase text-gray-50 bg-cream1'>
                <tr>
                  <th
                    scope='col'
                    className='px-2 py-3 lg:px-4 lg:py-3'
                  >
                    No
                  </th>
                  <th
                    scope='col'
                    className='px-2 py-3 lg:px-4 lg:py-3'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-2 py-3 lg:px-4 lg:py-3'
                  >
                    Harga
                  </th>
                  <th
                    scope='col'
                    className='px-2 py-3 lg:px-4 lg:py-3'
                  >
                    Brand
                  </th>
                  <th
                    scope='col'
                    className='px-2 py-3 lg:px-4 lg:py-3'
                  >
                    Status
                  </th>
                  <th
                    scope='col'
                    className='px-2 py-3 lg:px-4 lg:py-3'
                  >
                    <span className='sr-only'>Action</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {products
                  ? products.map((product, index) => (
                      <ProductList
                        nomer={index + 1}
                        product={product}
                        key={product.id_product}
                      />
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
        <div className='flex justify-end mt-4 mb-5'>
          <Pagination
            currentPage={currentPage}
            pages={pages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
}

export default page;
