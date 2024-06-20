'use client';
import Input from '@/src/components/Input';
import ModalAlert from '@/src/components/alert/ModalAlert';
import { createProduct, getProductById, productSelector, updateProduct } from '@/src/utils/slices/productSlice';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdArrowBack } from 'react-icons/io';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

function Page() {
  const [formData, setFormData] = useState({
    name_product: '',
    brand: '',
    price: '',
    discount: 0,
    size: '',
    status: '',
    desc: '',
    image: null,
    image2: null,
    image3: null,
  });

  const dispatch = useDispatch();
  const { id } = useParams();
  const router = useRouter();
  const { productById: product, errorMessage } = useSelector(productSelector);
  const { data: session } = useSession();
  const token = session?.user?.accessToken;
  // console.log(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'price' || name === 'discount' || name === 'size' ? parseInt(value) : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name_product: formData.name_product,
      brand: formData.brand,
      price: formData.price,
      discount: formData.discount,
      size: formData.size,
      status: formData.status,
      desc: formData.desc,
      image: formData.image,
      image2: formData.image2,
      image3: formData.image3,
    };

    dispatch(updateProduct({ dataa: data, id, token }));
  };

  useEffect(() => {
    if (product) {
      setFormData({
        name_product: product.name_product || '',
        brand: product.brand || '',
        price: product.price || '',
        discount: product.discount || 0,
        size: product.size || '',
        status: product.status || '',
        desc: product.desc || '',
        image: product.image || null,
        image2: product.image2 || null,
        image3: product.image3 || null,
      });
    }
  }, [product]);

  useEffect(() => {
    if (token && id) {
      dispatch(getProductById({ id, token }));
    }
  }, [id, dispatch, token]);

  useEffect(() => {
    if (product.code === 200) {
      ModalAlert('Update product', 'success', product.name_product);
    }
    if (errorMessage === 'Validation error') {
      ModalAlert('Update product', 'error', '');
    }
  }, [product, errorMessage]);

  return (
    <>
      <section className='min-h-screen px-6 mt-10'>
        <button
          className='flex items-center font-semibold text-primaryBrown'
          onClick={() => router.back()}
        >
          <span className='mr-2'>
            <IoMdArrowBack />
          </span>
          Back to Product
        </button>

        <h1 className='mt-6 mb-2 text-2xl font-semibold'>Create Product</h1>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-2'>
            <div className='w-full'>
              <Input
                placeholder={'Masukkan nama sepatu'}
                name={'name_product'}
                onChange={handleChange}
                value={formData.name_product}
              />
            </div>
            <div className='w-full'>
              <Input
                placeholder={'Masukkan brand sepatu'}
                name={'brand'}
                onChange={handleChange}
                value={formData.brand}
              />
            </div>

            <div className='w-full'>
              <Input
                placeholder={'Masukkan harga sepatu'}
                name={'price'}
                type='number'
                onChange={handleChange}
                value={formData.price}
              />
            </div>
            <div className='w-full'>
              <Input
                placeholder={'Masukkan diskon sepatu'}
                name={'discount'}
                type='number'
                onChange={handleChange}
                value={formData.discount || 0}
              />
            </div>
            <div className='w-full'>
              <Input
                placeholder={'Masukkan ukuran sepatu'}
                name={'size'}
                type='number'
                onChange={handleChange}
                value={formData.size}
              />
            </div>
            <div className='w-full'>
              <Input
                placeholder={'Masukkan status sepatu'}
                name={'status'}
                onChange={handleChange}
                value={formData.status}
              />
            </div>
            <div className='w-full'>
              <Input
                placeholder={'Masukkan deskripsi sepatu'}
                name={'desc'}
                type='textarea'
                onChange={handleChange}
                value={formData.desc}
              />
            </div>
            <div className='flex gap-4'>
              <div className='flex flex-col items-center justify-center'>
                <label
                  htmlFor='file-upload-1'
                  className='cursor-pointer'
                >
                  <div className='flex items-center justify-center w-16 h-16 text-white border-2 rounded-md border-primaryBrown hover:bg-primaryBrown-dark'>
                    {formData.image ? (
                      <Image
                        src={formData.image}
                        width={200}
                        height={200}
                        alt='image input'
                        className='rounded-lg'
                      />
                    ) : (
                      <span>Upload</span>
                    )}
                  </div>
                  <input
                    id='file-upload-1'
                    type='file'
                    name='image'
                    onChange={handleFileChange}
                    className='hidden'
                  />
                </label>
                <p className='mt-2 text-sm'>image</p>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <label
                  htmlFor='file-upload-2'
                  className='cursor-pointer'
                >
                  <div className='flex items-center justify-center w-16 h-16 text-white border-2 rounded-md border-primaryBrown hover:bg-primaryBrown-dark'>
                    {formData.image2 ? (
                      <Image
                        src={formData.image2}
                        width={200}
                        height={200}
                        alt='image input'
                        className='rounded-lg'
                      />
                    ) : (
                      <span>Upload</span>
                    )}
                  </div>
                  <input
                    id='file-upload-2'
                    type='file'
                    name='image2'
                    onChange={handleFileChange}
                    className='hidden'
                  />
                </label>
                <p className='mt-2 text-sm'>image2</p>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <label
                  htmlFor='file-upload-3'
                  className='cursor-pointer'
                >
                  <div className='flex items-center justify-center w-16 h-16 text-white border-2 rounded-md border-primaryBrown hover:bg-primaryBrown-dark'>
                    {formData.image3 ? (
                      <Image
                        src={formData.image3}
                        width={200}
                        height={200}
                        alt='image input'
                        className='rounded-lg'
                      />
                    ) : (
                      <span>Upload</span>
                    )}
                  </div>
                  <input
                    id='file-upload-3'
                    type='file'
                    name='image3'
                    onChange={handleFileChange}
                    className='hidden'
                  />
                </label>
                <p className='mt-2 text-sm'>image3</p>
              </div>
            </div>
            <button
              type='submit'
              className='px-4 py-2 mt-4 text-white bg-blue-500 rounded'
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Page;
