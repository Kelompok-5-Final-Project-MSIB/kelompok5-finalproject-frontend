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
  const dispatch = useDispatch();
  const { id } = useParams();
  const router = useRouter();
  const { productById: product, errorMessage } = useSelector(productSelector);
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const [formData, setFormData] = useState({
    name_product: '',
    brand: '',
    price: 0,
    discount: 0,
    size: 0,
    status: '',
    desc: '',
    image: null,
    image2: null,
    image3: null,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name_product: product.name_product,
        brand: product.brand,
        price: product.price,
        discount: product.discount,
        size: product.size,
        status: product.status,
        desc: product.desc,
        image: null,
        image2: null,
        image3: null,
      });
    }
  }, [product]);

  useEffect(() => {
    if (token && id) {
      dispatch(getProductById({ id, token }));
    }
  }, [id, dispatch, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'price' || name === 'discount' || name === 'size' ? parseFloat(value) : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitData = new FormData();
    submitData.append('name_product', formData.name_product);
    submitData.append('brand', formData.brand);
    submitData.append('price', formData.price);
    submitData.append('discount', formData.discount);
    submitData.append('size', formData.size);
    submitData.append('status', formData.status);
    submitData.append('desc', formData.desc);
    if (formData.image) submitData.append('image', formData.image);
    if (formData.image2) submitData.append('image2', formData.image2);
    if (formData.image3) submitData.append('image3', formData.image3);

    dispatch(updateProduct({ dataa: submitData, id, token }));
  };

  useEffect(() => {
    if (product?.code === 200) {
      ModalAlert('Update product', 'success', product.name_product);
      router.push('/admin/product');
      setFormData((prevData) => ({
        ...prevData,
        image: null,
        image2: null,
        image3: null,
      }));
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

        <h1 className='mt-6 mb-2 text-2xl font-semibold'>Update Product</h1>

        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-2'>
            <div className='w-full'>
              <Input
                placeholder='Masukkan nama sepatu'
                name='name_product'
                onChange={handleChange}
                value={formData.name_product}
              />
            </div>
            <div className='w-full'>
              <Input
                placeholder='Masukkan brand sepatu'
                name='brand'
                onChange={handleChange}
                value={formData.brand}
              />
            </div>

            <div className='w-full'>
              <Input
                placeholder='Masukkan harga sepatu'
                name='price'
                type='number'
                onChange={handleChange}
                value={formData.price}
              />
            </div>
            <div className='w-full'>
              <Input
                placeholder='Masukkan diskon sepatu'
                name='discount'
                type='number'
                onChange={handleChange}
                value={formData.discount}
              />
            </div>
            <div className='w-full'>
              <Input
                placeholder='Masukkan ukuran sepatu'
                name='size'
                type='number'
                onChange={handleChange}
                value={formData.size}
              />
            </div>
            <div className='w-full'>
              <Input
                placeholder='Masukkan status sepatu'
                name='status'
                onChange={handleChange}
                value={formData.status}
              />
            </div>
            <div className='w-full'>
              <Input
                placeholder='Masukkan deskripsi sepatu'
                name='desc'
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
                        src={URL.createObjectURL(formData.image)}
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
                        src={URL.createObjectURL(formData.image2)}
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
                        src={URL.createObjectURL(formData.image3)}
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
              className='px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600'
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
