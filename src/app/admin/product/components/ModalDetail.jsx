'use client';
import { calculateDiscountedPrice, formatToCurrency } from '@/src/utils/convertion';
import { clearState, getAllProduct, getProductById, productSelector } from '@/src/utils/slices/productSlice';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ModalDetail = ({ setIsOpenModal, idProduct, token }) => {
  const dispatch = useDispatch();
  const { isLoading, productById: product } = useSelector(productSelector);
  const [selectedImage, setSelectedImage] = useState(product.image ? product.image : '/picture.jpg');

  useEffect(() => {
    dispatch(clearState());
    dispatch(getProductById({ id: idProduct, token }));
  }, [dispatch, selectedImage]);
  return (
    <div
      id='default-modal'
      tabindex='-1'
      aria-hidden='true'
      className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-x-hidden overflow-y-auto bg-black/30'
    >
      <div className='relative w-full max-w-2xl max-h-full p-4'>
        <div className='relative bg-white rounded-lg shadow px-7 text-black2'>
          <div className='flex items-center justify-between p-4 b md:p-5 '>
            <h3 className='text-lg font-semibold text-gray-900 '>Detail Product</h3>
            <button
              type='button'
              className='inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-primaryBrown hover:text-white ms-auto'
              data-modal-hide='default-modal'
              onClick={() => setIsOpenModal(false)}
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
          <div className='flex gap-8 px-6 py-3 mb-2'>
            <div className=' w-[40%]'>
              <Image
                src={selectedImage}
                alt={product?.name_product}
                width={200}
                height={200}
                priority={true}
                className='w-full mb-6 mr-6 '
              />
              <nav aria-label='Page navigation example mt-2'>
                <ul className='flex items-center h-3 gap-3 text-base'>
                  <li>
                    <button
                      className={`z-10 flex items-center bg-cream2 text-white justify-center h-8 px-3 leading-tight hover:bg-cream2 hover:text-black`}
                      onClick={() => setSelectedImage(product?.image)}
                    >
                      1
                    </button>
                  </li>
                  <li>
                    <button
                      className={`z-10 flex items-center bg-cream2 text-white justify-center h-8 px-3 leading-tight hover:bg-cream2 hover:text-black`}
                      onClick={() => setSelectedImage(product.image2 ?? '/picture.jpg')}
                    >
                      2
                    </button>
                  </li>
                  <li>
                    <button
                      className={`z-10 flex items-center bg-cream2 text-white justify-center h-8 px-3 leading-tight hover:bg-cream2 hover:text-black`}
                      onClick={() => setSelectedImage(product.image3 ?? '/picture.jpg')}
                    >
                      3
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div className='flex flex-col w-1/2 gap-8'>
              <div className='flex justify-between'>
                <div>
                  <h1 className='mb-1.5 font-medium'>Nama Produk</h1>
                  <p>{product?.name_product}</p>
                </div>
                <div>
                  <h1 className='mb-1.5 font-medium'>Brand</h1>
                  <p>{product?.brand}</p>
                </div>
              </div>
              <div className='flex justify-between'>
                <div>
                  <h1 className='mb-1.5 font-medium'>Harga</h1>
                  <p>{formatToCurrency(product?.price)}</p>
                </div>
                <div>
                  <h1 className='mb-1.5 font-medium'>Diskon</h1>
                  <p>{product?.discount}%</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-between gap-16 px-8 py-3 pb-16'>
            <div className='w-[67%]'>
              <h1 className='mb-2 text-lg font-medium'>Deskripsi</h1>
              <p>{product?.desc}</p>
            </div>
            <div className='w-[40%]'>
              <h1 className='mb-1 text-base font-medium'>Harga setelah diskon</h1>
              <p className='mb-1'>{formatToCurrency(product?.price)}</p>
              <p> {formatToCurrency(product?.price * (product?.discount / 100))}</p>
              <div className='flex items-center'>
                <hr class='w-48 h-[2px] mx-auto my-1 border-0 rounded  bg-gray-700 mr-1'></hr>
                <p className='font-semibold'>-</p>
              </div>

              <p className=''>{formatToCurrency(calculateDiscountedPrice(product?.price, product?.discount))}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
