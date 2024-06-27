'use client';
import { formatToCurrency, formatToDate } from '@/src/utils/convertion';
import { getPaymentUser, paymentSelector } from '@/src/utils/slices/paymentSlice';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PaymentModal({ setIsOpenModalPayment }) {
  const { data: sessioon } = useSession();
  const { paymentData } = useSelector(paymentSelector);
  const dispatch = useDispatch();
  const token = sessioon?.user?.accessToken;
  const payment = paymentData?.data;
  // console.log(payment);
  useEffect(() => {
    dispatch(getPaymentUser({ token }));
  }, [token]);
  return (
    <div>
      <section className='lg:ml-auto'>
        <div
          id='crud-modal'
          tabIndex='-1'
          aria-hidden='true'
          className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-x-hidden overflow-y-auto bg-black/50'
        >
          <div className='relative w-full max-w-screen-xl max-h-full p-4'>
            <div className='relative z-50 bg-white rounded-lg shadow-lg'>
              <div className='flex items-center justify-between p-4 border-b rounded-t md:p-5 '>
                <h3 className='text-lg font-semibold text-center text-primaryBrown '>Seluruh Pembelian Sepatu</h3>
                <button
                  type='button'
                  className='inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 '
                  data-modal-toggle='crud-modal'
                  onClick={() => setIsOpenModalPayment(false)}
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
                </button>
              </div>
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
                      Harga
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
                      Tanggal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {payment?.map((item, index) => (
                    <tr className='border-b hover:bg-gray-100'>
                      <td className='px-4 py-3'>{index + 1}</td>
                      <td className='px-4 py-3'>{formatToCurrency(item?.gross_amount)}</td>
                      <td
                        className={`px-4 py-3 ${
                          item?.transaction_status === 'settlement' ? 'text-green-500' : 'text-red-500'
                        }`}
                      >
                        {item?.transaction_status}
                      </td>
                      <td className='px-4 py-3'>{formatToDate(item?.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PaymentModal;
