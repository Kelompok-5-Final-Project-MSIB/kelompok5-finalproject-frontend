'use client';
import Navbar from '@/src/components/Navbar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import EditAddress from '@/src/app/cekout/components/EditAddress';
import { useDispatch, useSelector } from 'react-redux';
import { addressSelector, getAddress } from '@/src/utils/slices/addressSlice';
import { useSession } from 'next-auth/react';
import { calculateDiscountedPrice, formatToCurrency } from '@/src/utils/convertion';
import { productSelector } from '@/src/utils/slices/productSlice';
import { useRouter } from 'next/navigation';
import { addPayment, paymentSelector } from '@/src/utils/slices/paymentSlice';

const Page = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [snapToken, setSnapToken] = useState('');
  const { addressData, isLoading } = useSelector(addressSelector);
  const { productCheckout, isLoading: loading } = useSelector(productSelector);
  const { paymentData } = useSelector(paymentSelector);
  const address = addressData?.data;
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const router = useRouter();
  const name = session?.user?.name;
  const token = session?.user?.accessToken;

  // console.log(paymentData);
  const handleSendOrder = (e) => {
    e.preventDefault();
    // alert('Order Succes');
    dispatch(addPayment({ token }));
  };
  const handleRedirect = () => {
    router.push('/user/profile');
  };
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  useEffect(() => {
    if (session?.user?.accessToken) dispatch(getAddress({ token }));
  }, [token, dispatch]);

  useEffect(() => {
    if (paymentData?.snap_token) {
      setSnapToken(paymentData.snap_token);
    }
  }, [paymentData]);

  useEffect(() => {
    if (snapToken) {
      window.snap.pay(snapToken, {
        onSuccess: function (result) {
          localStorage.setItem('paymentResult', JSON.stringify(result));
          setSnapToken('');
        },

        onPending: function (result) {
          localStorage.setItem('paymentResult', JSON.stringify(result));
          setSnapToken('');
        },

        onError: function (result) {
          console.log(result);
          setSnapToken('');
        },

        onClose: function () {
          alert('you closed the popup without finishing the payment');
          setSnapToken('');
        },
      });
    }
  }, [snapToken]);

  useEffect(() => {
    const midtransUrl = `https://app.sandbox.midtrans.com/snap/snap.js`;

    let scriptTag = document.createElement('script');
    scriptTag.src = midtransUrl;

    const midtransClientKey = 'SB-Mid-client-FPlDDrfRtGsI8j_E';
    scriptTag.setAttribute('data-client-key', midtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <>
      <Navbar />

      <section>
        <div className='px-4 md:px-10 mt-[50px] mb-4'>
          {' '}
          {/* Adjusted margin-bottom */}
          <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6'>
            <nav
              className='flex mb-4'
              aria-label='Breadcrumb'
            >
              <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
                <li className='inline-flex items-center'>
                  <a
                    onClick={() => router.push('/products')}
                    className='inline-flex items-center text-lg font-medium text-gray-700 cursor-pointer hover:text-blue-900'
                  >
                    <svg
                      className='w-3 h-3 mr-2.5'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' />
                    </svg>
                    Products
                  </a>
                </li>
              </ol>
            </nav>
            <div className='mt-4 mb-4 text-left border border-gray-200 max-w-screen-full lg:mb-2'>
              <a
                href='#'
                className='flex items-center justify-start w-auto h-8 m-2 text-gray-900'
              >
                <svg
                  className='w-6 h-6'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
                  />
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z'
                  />
                </svg>
                <span className='ml-2'>Alamat Pengirim</span>
              </a>
              <div className='items-center px-4 py-4 sm:flex sm:flex-col lg:grid lg:grid-cols-3 lg:gap-2 lg:px-0'>
                <h4 className='mb-2 text-sm font-normal text-gray-500 capitalize lg:ml-6'>{name}</h4>
                <h4 className='mb-2 text-sm font-normal text-gray-500 lg:ml-4 lg:text-left'>
                  {isLoading ? (
                    'Loading address...'
                  ) : address ? (
                    `${address.details}, ${address.province}, ${address.city}`
                  ) : (
                    <span
                      onClick={handleRedirect}
                      style={{ color: 'blue', cursor: 'pointer' }}
                    >
                      Buatlah alamat dahulu
                    </span>
                  )}
                </h4>

                <button
                  data-modal-target='crud-modal'
                  data-modal-toggle='crud-modal'
                  className='text-white bg-amber-500 border-2 border-amber-500 hover:bg-amber-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-cream2 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center lg:ml-auto lg:mr-6 mt-2 sm:mt-4 lg:mt-0'
                  onClick={handleOpenModal}
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
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
                    />
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z'
                    />
                  </svg>
                  <span>Edit Address</span>
                </button>
                {isOpenModal && <EditAddress setIsOpenModal={setIsOpenModal} />}
              </div>
            </div>
          </div>
          <div className='border border-gray-200 max-w-screen-full'></div>
        </div>
      </section>
      <section className='max-w-screen-xl px-4 py-8 mx-auto antialiased lg:px-6'>
        {' '}
        {/* Adjusted margin-top */}
        <form
          action='#'
          className='max-w-screen-xl px-4 mx-auto 2xl:px-0'
        >
          <div className='mb-4 text-left border border-gray-200 max-w-screen-full lg:mb-8'>
            <h2 className='mt-2 text-lg font-semibold text-gray-600 lg:ml-6'>Produk Pemesanan</h2>
            <div className='relative overflow-x-auto border-b border-gray-200 dark:border-gray-800'>
              <table className='w-full font-medium text-left text-gray-900 dark:text-white md:table-fixed'>
                <tbody className='divide-y divide-gray-200 dark:divide-gray-800'>
                  {productCheckout?.map((product) => (
                    <tr>
                      <td className='whitespace-nowrap py-4 md:w-[384px]'>
                        <div className='flex items-center gap-4 lg:ml-6'>
                          <Image
                            src={product.image ?? '/picture.jpg'}
                            alt={product?.name_product}
                            width={100}
                            height={100}
                            priority={true}
                            className='object-contain w-2/5 h-full'
                          />
                          <a
                            href='#'
                            className='hover:underline'
                          >
                            {product?.name_product}
                          </a>
                        </div>
                      </td>
                      <td className='p-4 text-base font-bold text-right text-gray-900 dark:text-white'>
                        {formatToCurrency(product?.price)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='mt-4 mr-6 space-y-6 lg:ml-6'>
              <h4 className='text-xl font-semibold text-gray-900 dark:text-white'>Order summary</h4>
              <div className='space-y-4'>
                <div className='space-y-2'>
                  <div className='flex items-center justify-between gap-4'>
                    <p className='text-gray-500 dark:text-gray-400'>Product after discount</p>
                    <p className='text-base font-medium text-gray-900 dark:text-white'>
                      {formatToCurrency(
                        calculateDiscountedPrice(productCheckout[0]?.price, productCheckout[0]?.discount),
                      )}
                    </p>
                  </div>
                  <div className='flex items-center justify-between gap-4'>
                    <p className='text-gray-500 dark:text-gray-400'>Total shipping</p>
                    <p className='text-base font-medium text-gray-900 dark:text-white'>
                      {address ? formatToCurrency(address?.shipping_cost) : '-'}
                    </p>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-4 pt-2 border-t border-gray-200 dark:border-gray-700'>
                  <p className='text-lg font-bold text-gray-900 dark:text-white'>Total Payment</p>
                  <p className='text-lg font-bold text-gray-900 dark:text-white'>
                    {address
                      ? formatToCurrency(
                          calculateDiscountedPrice(productCheckout[0]?.price, productCheckout[0]?.discount) +
                            address?.shipping_cost,
                        )
                      : '-'}
                  </p>
                </div>
              </div>
              <div className='flex items-start sm:items-center'>
                <input
                  id='terms-checkbox-2'
                  type='checkbox'
                  value=''
                  className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600'
                />
                <label
                  htmlFor='terms-checkbox-2'
                  className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  {' '}
                  I agree with the{' '}
                  <a
                    href='#'
                    title=''
                    className='underline text-primary-700 hover:no-underline dark:text-primary-500'
                  >
                    Terms and Conditions
                  </a>{' '}
                  of use of the Flowbite marketplace{' '}
                </label>
              </div>
              <div className='gap-4 sm:flex sm:items-center'>
                <button
                  type='button'
                  className='w-full rounded-lg border border-red-200 bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-500 hover:text-gray-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-red-100'
                  onClick={() => router.push('/products')}
                >
                  Return to Shopping
                </button>
                <button
                  type='submit'
                  className='mt-4 flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 sm:mt-0'
                  onClick={handleSendOrder}
                >
                  Send the order
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Page;
