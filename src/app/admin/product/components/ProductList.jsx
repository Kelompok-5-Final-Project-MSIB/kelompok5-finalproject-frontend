import React, { useEffect, useState } from 'react';
import ModalDetail from './ModalDetail';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '@/src/utils/slices/productSlice';
import ModalAlert from '@/src/components/alert/ModalAlert';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

function ProductList({ product, nomer }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  // console.log(token);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleDeleteProduct = (idProduct) => {
    dispatch(deleteProduct({ id: idProduct, token }));
    ModalAlert('Delete Product', 'success', product.name_product);
  };

  const handleUpdateProduct = (idProduct) => {
    router.push(`/admin/product/update/${idProduct}`);
  };

  useEffect(() => {
    if (isOpenModal) {
      document.body.classList.add('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpenModal]);
  return (
    <>
      <tr className='border-b hover:bg-gray-100'>
        <td className='px-4 py-3'>{nomer}</td>
        <th
          scope='row'
          className='flex flex-col items-center px-4 py-3 font-medium text-gray-900 lg:flex-row whitespace-nowrap'
        >
          <Image
            className='mr-4 w-14'
            src={product?.image}
            alt='Jese image'
            width={100}
            height={100}
            priority={true}
          />
          <p className='font-normal text-black2'>{product.name_product}</p>
        </th>
        <td className='px-4 py-3'>{product.price}</td>
        <td className='px-4 py-3'>{product?.brand}</td>
        <td className={`${product.status !== 'available' ? 'text-red-700' : 'text-green-600'} px-4 py-3`}>
          {product?.status}
        </td>

        <td className='px-4 py-3'>
          <button
            type='button'
            className='text-primaryBrown border-2 border-primaryBrown hover:bg-primaryBrown hover:text-white mr-2 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center group'
            onClick={() => handleOpenModal()}
          >
            <svg
              class='w-4 h-4 text-primaryBrown group-hover:text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                stroke-width='2'
                d='M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z'
              />
              <path
                stroke='currentColor'
                stroke-width='2'
                d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>
            <span className='sr-only'>Icon Eye</span>
          </button>
          <a
            onClick={() => handleUpdateProduct(product?.id_product)}
            type='button'
            className='text-amber-500 border-2 border-amber-500 hover:bg-amber-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center my-1 lg:m-1'
          >
            <svg
              className='w-4 h-4'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 18'
            >
              <path d='M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z' />
              <path d='M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z' />
            </svg>
            <span className='sr-only'>Icon edit</span>
          </a>

          <button
            type='button'
            className='text-red-700 border-2 border-red-700 hover:bg-red-700 hover:text-white ml-2 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center'
            onClick={() => handleDeleteProduct(product?.id_product)}
          >
            <svg
              className='w-4 h-4'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z'
              />
            </svg>
            <span className='sr-only'>Icon Trash</span>
          </button>
        </td>
      </tr>
      {isOpenModal && (
        <ModalDetail
          setIsOpenModal={setIsOpenModal}
          idProduct={product.id_product}
          token={token}
        />
      )}
    </>
  );
}

export default ProductList;
