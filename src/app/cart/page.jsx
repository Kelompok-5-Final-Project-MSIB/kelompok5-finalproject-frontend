'use client';
import Navbar from '@/src/components/Navbar';
import ProductCard from '@/src/components/ProductCard';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector, getAllProductCart, clearState, selectAllProducts } from '@/src/utils/slices/cartSlice';
import { useSession } from 'next-auth/react';
import SkeletonCart from '@/src/components/skeleton/SkeletonCart';
import { useRouter } from 'next/navigation';
import { formatToCurrency } from '@/src/utils/convertion';
import { addItemToCheckout } from '@/src/utils/slices/productSlice';

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { cartProduct, isLoading, selectedProducts, isSelectAll } = useSelector(cartSelector);
  const { data: session, status } = useSession();
  const token = session?.user?.accessToken;
  const carts = cartProduct?.data;
  // console.log(cartProduct);

  const handleToCheckout = () => {
    selectedProducts.forEach((product) => {
      dispatch(addItemToCheckout(product));
    });
    router.push('/cekout');
  };

  const handleSelectAll = (isChecked) => {
    dispatch(selectAllProducts({ products: carts, isChecked }));
  };

  const calculatedSubtotal = () => {
    return selectedProducts.reduce((total, product) => total + product.discounted_price, 0);
  };

  const subtotal = calculatedSubtotal();
  const total = subtotal;

  useEffect(() => {
    if (status === 'authenticated' && token) {
      dispatch(clearState());
      dispatch(getAllProductCart({ token: token }));
    }
  }, [token, dispatch]);
  return (
    <section>
      <Navbar />
      <div className='px-4 md:px-14 lg:px-28 mt-[100px] mb-12'>
        <h1 className='px-4 text-2xl font-semibold'>Cart</h1>
        <div>
          {/* header */}
          <div className='flex items-center px-4 mt-6'>
            <input
              id='default-checkbox'
              type='checkbox'
              value={''}
              className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primaryBrown focus:ring-primaryBrown dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              onChange={(e) => handleSelectAll(e.target.checked)}
            />
            <p className='ml-8'>Products</p>
          </div>
          {/* cart */}
          <div className='flex flex-col items-start justify-between gap-4 lg:flex-row'>
            <div className='w-[60%] md:w-full grid grid-cols-1 gap-4'>
              {isLoading
                ? Array.from({ length: 3 }).map((_, index) => <SkeletonCart key={index} />)
                : carts?.map((product, index) => (
                    <ProductCard
                      key={index}
                      product={product}
                      isInCart={true}
                      token={token}
                    />
                  ))}
            </div>
            <div className='lg:w-[35%] w-full px-6 py-3 shadow-lg'>
              <div className='flex items-center justify-between mb-3'>
                <p>Subtotal</p>
                <p>{formatToCurrency(subtotal)}</p>
              </div>
              <div className='flex items-center justify-between mb-5'>
                <h1 className='text-2xl font-medium'>Total</h1>
                <h1 className='text-2xl font-medium'>{formatToCurrency(total)}</h1>
              </div>
              <button
                className='w-full px-6 py-3 text-white rounded-lg bg-cream1'
                onClick={handleToCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
