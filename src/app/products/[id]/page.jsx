'use client';
import Navbar from '@/src/components/Navbar';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { productSelector, getProductById, clearState } from '@/src/utils/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { calculateDiscountedPrice, formatToCurrency } from '@/src/utils/convertion';
import SkeletonDetailProduct from '@/src/components/skeleton/SkeletonDetailProduct';
import { cartSelector, addCart } from '@/src/utils/slices/cartSlice';
import ModalAlert from '@/src/components/alert/ModalAlert';
import { useSession } from 'next-auth/react';
const page = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();
  const { isLoading, productById: product } = useSelector(productSelector);
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const { errorMessage } = useSelector(cartSelector);
  const token = session?.user?.accessToken;
  const fetchProducts = () => {
    dispatch(getProductById({ id, token }));
  };

  const handleAddToCart = (id, token) => {
    dispatch(addCart({ id_product: id, token: token }));
    if (errorMessage.status === 'error') {
      ModalAlert('Cart', 'error', errorMessage?.message);
    }
    router.push('/cart');
  };

  useEffect(() => {
    dispatch(clearState());
    fetchProducts();
  }, [session]);

  if (isLoading) {
    return (
      <section>
        <Navbar />
        <SkeletonDetailProduct />
      </section>
    );
  }
  return (
    <section>
      <Navbar />

      <div className='px-4 md:px-14 mt-[100px] mb-12'>
        <button
          className='flex items-center font-semibold text-primaryBrown'
          onClick={() => router.back()}
        >
          <span className='mr-2'>
            <IoMdArrowBack />
          </span>{' '}
          Back to Product
        </button>
        {/* product */}
        <div className='flex items-start gap-8 mt-6'>
          {/* image */}
          <div className='flex items-center gap-3.5'>
            <div className='flex flex-col gap-3.5'>
              <div
                className='w-24 h-24'
                onClick={() => setSelectedImage(product?.image)}
              >
                <Image
                  src={product?.image}
                  width={500}
                  height={500}
                  alt='shoes'
                  className='w-[100%]'
                />
              </div>
              <div
                className='w-24 h-24'
                onClick={() => setSelectedImage(product?.image2)}
              >
                <Image
                  src={product?.image2}
                  width={500}
                  height={500}
                  alt='shoes'
                  className='w-[100%]'
                />
              </div>
              <div
                className='w-24 h-24'
                onClick={() => setSelectedImage(product?.image3)}
              >
                <Image
                  src={product?.image3}
                  width={500}
                  height={500}
                  alt='shoes'
                  className='w-[100%]'
                />
              </div>
            </div>
            <div className='w-80 h-80'>
              <Image
                src={selectedImage}
                alt='shoes'
                width={500}
                height={500}
                priority={false}
                className='object-cover w-full h-full'
              />
            </div>
          </div>
          {/* desc */}
          <div className='pr-20'>
            <h1 className='text-2xl font-semibold'>{product?.name_product}</h1>
            <h3 className='mt-2 text-lg text-textInput'>
              {formatToCurrency(calculateDiscountedPrice(product?.price, product?.discount))}
            </h3>
            <hr className='h-px my-4 border-0 bg-strokeInput'></hr>

            <p className='mb-3 pr-28'>{product?.desc}</p>
            <div className='flex flex-col'>
              Size
              <div className='mt-1 px-2.5 py-2 text-white rounded-md w-fit bg-cream1'>{product?.size}</div>
            </div>
            <div className='flex mt-4'>
              <button
                className='px-10 py-2 mr-3 text-white border rounded-lg bg-primaryBrown border-primaryBrown'
                onClick={() => router.push('/cekout')}
              >
                Checkout
              </button>
              <button
                className='px-10 py-2 border rounded-lg border-primaryBrown hover:bg-primaryBrown hover:border-white hover:text-white'
                onClick={() => handleAddToCart(id, token)}
              >
                Add to Cart
              </button>
            </div>
            <hr className='h-px my-5 border-0 bg-strokeInput'></hr>
          </div>
        </div>

        {/* description */}
        <div className='px-20'>
          <div className='rounded-md mt-14 bg-cream1'>
            <h1 className='px-6 py-6 text-base font-semibold text-white'>Product Information</h1>
            <hr className='h-px border-0 bg-strokeInput'></hr>
            <p className='py-6 pl-6 pr-16'>{product?.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
