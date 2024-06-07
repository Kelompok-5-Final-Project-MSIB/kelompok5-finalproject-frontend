import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import { FaEye } from 'react-icons/fa';
import ModalDetail from '@/src/app/admin/product/components/ModalDetail';

function ProductList({ product }) {
  return (
    <tr className='bg-[#fff] hover:bg-gray-50 font-normal text-black2 h-fit'>
      <th
        scope='row'
        className='flex flex-col items-center h-auto px-6 py-4 lg:flex-row whitespace-nowrap dark:text-white'
      >
        <img
          className='mr-4 w-14'
          src={product.image}
          alt='Jese image'
        />
        <p className='font-normal text-black2'>{product.name_product}</p>
      </th>
      <td className='px-6 py-4'>{product.price}</td>
      <td className='px-6 py-4'>{product.brand}</td>
      <td className={`px-6 py-4 ${product.status !== 'available' ? 'text-red-700' : 'text-green-600'}`}>
        {product.status}
      </td>
      <td className='flex flex-col h-auto gap-2 px-6 py-4 -mt-8 lg:flex-row'>
        <button className='flex items-center px-3 py-2 mb-2 text-sm font-medium text-white bg-primaryBrown rounded-xl focus:outline-none hover:bg-brown2 focus:ring-4 focus:ring-brown2'>
          <span className='mr-1'>
            <FaEye />
          </span>{' '}
          Detail
        </button>
        {/* <ModalDetail /> */}
        <button className='flex items-center px-3 py-2 mb-2 text-sm font-medium text-white bg-cream3 rounded-xl focus:outline-none hover:bg-cream1 focus:ring-4 focus:ring-cream1'>
          <span className='mr-1'>
            <RiEdit2Line />
          </span>
          Ubah
        </button>
        <button
          type='button'
          className='px-5 py-2 mb-2 text-sm font-medium text-white bg-red-600 rounded-xl focus:outline-none hover:bg-red-700 focus:ring-4 focus:ring-red-600'
        >
          <FaRegTrashAlt className='text-lg' />
        </button>
      </td>
    </tr>
  );
}

export default ProductList;
