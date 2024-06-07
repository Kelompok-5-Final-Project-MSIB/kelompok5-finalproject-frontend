'use client';
import { productSelector, getAllProduct, clearState, setCurrentPage } from '@/src/utils/slices/productSlice';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from './components/ProductList';
import Pagination from '@/src/components/Pagination';
import { useRouter, useSearchParams } from 'next/navigation';
function page() {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoading, product, currentPage } = useSelector(productSelector);
  const products = product.data;
  const pages = Array.from({ length: Math.ceil(product.total / product.per_page) }, (_, i) => i + 1);
  const search = searchParams.get('search') || '';
  // console.log(products);
  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(getAllProduct({ current: page, name: search }));
    router.push(`/admin/product?page=${page}&search=${search}`, { scroll: false });
  };

  useEffect(() => {
    dispatch(getAllProduct({ current: currentPage }));
    dispatch(clearState());
  }, [session]);

  return (
    <section className='px-10 mt-12'>
      <h1 className='text-2xl font-bold'>Product</h1>

      <div className='h-screen mt-4 overflow-x-auto md:mt-6'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 rtl:text-right '>
            <thead className='text-xs text-gray-700 uppercase bg-[#F7F6F9] '>
              <tr classNameName=''>
                <th
                  scope='col'
                  className='px-6 py-3'
                >
                  Name
                </th>
                <th
                  scope='col'
                  className='px-6 py-3'
                >
                  Harga
                </th>
                <th
                  scope='col'
                  className='px-6 py-3'
                >
                  Brand
                </th>
                <th
                  scope='col'
                  className='px-6 py-3'
                >
                  Status
                </th>
                <th
                  scope='col'
                  className='px-6 py-3'
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products
                ? products.map((product) => (
                    <ProductList
                      product={product}
                      key={product.id_product}
                    />
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex justify-center mb-14'>
        <Pagination
          currentPage={currentPage}
          pages={pages}
          handlePageChange={handlePageChange}
        />
      </div>
      {/* <ModalProduct /> */}
    </section>
  );
}

export default page;
