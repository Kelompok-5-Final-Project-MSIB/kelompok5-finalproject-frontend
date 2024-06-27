'use client';

import { formatToCurrency, formatToDate } from '@/src/utils/convertion';
import { getPayment, paymentSelector } from '@/src/utils/slices/paymentSlice';
import { clearState, getUserData, profileSelector } from '@/src/utils/slices/profileSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Transaksi = () => {
  const { paymentData } = useSelector(paymentSelector);
  const dispatch = useDispatch();
  const payment = paymentData?.data;

  useEffect(() => {
    dispatch(getPayment());
  }, []);
  return (
    <>
      <section className='px-10 mt-12'>
        <h1 className='text-2xl font-bold'>Product</h1>
        <div className='h-screen mt-4 overflow-x-auto md:mt-6'>
          <div className='relative overflow-hidden bg-white rounded-lg shadow-md sm:rounded-lg'>
            <div className='flex flex-col items-center justify-between p-4 space-y-3 bg-cream1 md:flex-row md:space-y-0 md:space-x-4'>
              <div className='flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3'>
                <h2 className='text-xl font-semibold text-white'>DAFTAR TRANSAKSI</h2>
              </div>

              <div className='w-full md:w-1/2'>
                <form className='flex items-center'>
                  <label
                    for='simple-search'
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
                        viewbox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      name='keyword'
                      id='simple-search'
                      className='block w-full p-2 pl-10 mr-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-blue-900'
                      placeholder='Cari Transaksi'
                    ></input>
                  </div>

                  <button
                    type='submit'
                    className='flex items-center justify-center px-4 py-2 ml-4 text-sm font-medium text-white rounded-lg bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300'
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
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                      />
                    </svg>
                    Cari
                  </button>
                </form>
              </div>
            </div>
            <div className='overflow-x-auto'>
              <table
                id='user-table'
                className='w-full text-sm text-gray-500'
              >
                <thead className='text-xs uppercase text-gray-50 bg-cream1'>
                  <tr>
                    <th className='p-4 px-6 py-3 text-xs font-semibold uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap '>
                      No
                    </th>
                    <th className='p-4 px-6 py-3 text-xs font-semibold uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap '>
                      Id Order
                    </th>
                    <th className='p-4 px-6 py-3 text-xs font-semibold uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap '>
                      Id User
                    </th>
                    <th className='p-4 px-6 py-3 text-xs font-semibold uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap '>
                      Status
                    </th>
                    <th className='p-4 px-6 py-3 text-xs font-semibold uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap '>
                      Total Product
                    </th>
                    <th className='p-4 px-6 py-3 text-xs font-semibold uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap '>
                      Tanggal Order
                    </th>
                    <th className='p-4 px-6 py-3 text-xs font-semibold uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap '>
                      Total Price
                    </th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  {payment?.map((payment, index) => (
                    <tr key={payment?.id_transaction}>
                      <th className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap '>
                        {index + 1}
                      </th>
                      <th className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap '>
                        {payment?.order_id}
                      </th>
                      <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                        {payment?.id_user}
                      </td>
                      <td
                        className={`${
                          payment?.transaction_status === 'pending' ? 'text-red-500' : 'text-emerald-500'
                        } p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap`}
                      >
                        {payment?.transaction_status}
                      </td>
                      <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                        <i className='mr-4 fas fa-arrow-up text-emerald-500'></i>1
                      </td>
                      <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                        {formatToDate(payment?.created_at)}
                      </td>
                      <td className='p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
                        {formatToCurrency(payment?.gross_amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transaksi;
