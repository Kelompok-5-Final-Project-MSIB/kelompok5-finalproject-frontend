'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@/src/components/Card';
import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import Pagination from '@/src/components/Pagination';
import Filter from '@/src/app/products/components/Filter';
import SkeletonProduct from '@/src/components/skeleton/SkeletonProduct';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaFilter } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { useSession } from 'next-auth/react';
import { useReportWebVitals } from 'next/web-vitals';
import { LuRefreshCcw } from 'react-icons/lu';

import { productSelector, getAllProduct, clearState, setCurrentPage } from '@/src/utils/slices/productSlice';
const page = () => {
  // useReportWebVitals((metric) => {
  //   console.log(metric);
  // });
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [nameProduct, setNameProduct] = useState('');
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading, product, currentPage } = useSelector(productSelector);
  const token = session?.user?.accessToken;

  const products = product.data;
  const pages = Array.from({ length: Math.ceil(product.total / product.per_page) }, (_, i) => i + 1);
  const search = searchParams.get('search') || '';
  const brand = searchParams.get('brand') || '';

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(getAllProduct({ current: page, name: search }));
    router.push(`/products?page=${page}&search=${search}`, { scroll: false });
  };

  const handleSearch = (e) => {
    setNameProduct(e.target.value);
    router.push(`/products?page=${currentPage}&search=${nameProduct}`, { scroll: false });
    dispatch(getAllProduct({ current: currentPage, name: search }));
    if (!e.target.value) {
      router.push(`/products?page=${currentPage}`, { scroll: false });
    }
  };

  const handleRefreshCourse = () => {
    setNameProduct('');
    router.push(`/products?page=${currentPage}`, { scroll: false });
    dispatch(getAllProduct({ current: currentPage, name: search, token }));
  };

  const updateFilters = ({ brand = searchParams.get('brand'), page = currentPage } = {}) => {
    router.push(`/products?page=${page}&brand=${brand}`, { scroll: false });
    dispatch(setCurrentPage(page));
    dispatch(getAllProduct({ current: page, token, brand }));
  };

  const fetchProducts = () => {
    dispatch(getAllProduct({ current: currentPage, name: search, token, brand }));
  };

  useEffect(() => {
    dispatch(clearState());
    fetchProducts();
  }, [search, session, brand, currentPage]);
  return (
    <section>
      <Navbar />
      <div className='px-4 md:px-14 mt-[100px] mb-12'>
        {/* search*/}
        <div className='relative flex items-center justify-end'>
          <LuRefreshCcw
            size={30}
            className={`mr-3 cursor-pointer text-primaryBrown cursorPointer ml-2`}
            onClick={handleRefreshCourse}
          />
          {isOpenModal ? <Filter style='absolute top-16 right-16 md:right-24' /> : ''}
          <button
            className='flex items-center px-2 mr-3 border rounded-lg lg:hidden group hover:bg-brown2 border-primaryBrown'
            onClick={() => setIsOpenModal(!isOpenModal)}
          >
            <FaFilter className='mr-2 text-xl text-primaryBrown group-hover:text-white' />
            <p className='font-medium text-primaryBrown group-hover:text-white'>Filter</p>
          </button>

          {/* search */}
          <input
            type='text'
            placeholder='Search shoes...'
            className='relative py-2 pl-2 border rounded-md pr-9 border-primaryBrown focus:ring-1 focus:ring-primaryBrown'
            onChange={handleSearch}
            value={nameProduct}
          />
          <button className='absolute p-1 rounded-full top-2 right-2 bg-primaryBrown'>
            <IoSearch className='text-white' />
          </button>
        </div>

        <div className='flex gap-[20px] lg:gap-[50px] mt-6 mb-12'>
          <Filter
            style='hidden lg:inline'
            token={token}
            updateFilters={updateFilters}
          />

          {/* all products */}
          <div className='w-full lg:w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {isLoading ? (
              <>
                <div className='flex flex-col gap-5 md:flex-row lg:flex-row'>
                  <SkeletonProduct />
                  <SkeletonProduct />
                </div>
              </>
            ) : (
              <>
                {products
                  ?.filter((prod) => prod.status === 'available')
                  ?.map((prod) => (
                    <Card
                      key={prod.id}
                      {...prod}
                      token={token}
                    />
                  ))}
              </>
            )}
          </div>
        </div>
        <div className='flex justify-center mb-14'>
          <Pagination
            currentPage={currentPage}
            pages={pages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
