import Navbar from '@/src/components/Navbar';
import Image from 'next/image';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';

const page = ({ params }) => {
  return (
    <section>
      <Navbar />
      <div className='px-4 md:px-14 mt-[100px] mb-12'>
        <button className='flex items-center font-semibold text-primaryBrown'>
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
              <div className='w-24 h-24'>
                <Image
                  src={'/shoes2.png'}
                  width={500}
                  height={500}
                  alt='shoes'
                  className='w-[100%]'
                />
              </div>
              <div className='w-24 h-24'>
                <Image
                  src={'/shoes1.png'}
                  width={500}
                  height={500}
                  alt='shoes'
                  className='w-[100%]'
                />
              </div>
              <div className='w-24 h-24'>
                <Image
                  src={'/shoes2.png'}
                  width={500}
                  height={500}
                  alt='shoes'
                  className='w-[100%]'
                />
              </div>
            </div>
            <div className='w-80 h-80'>
              <Image
                src={'/shoes2.png'}
                width={500}
                height={500}
                alt='shoes'
                className='w-[100%]'
              />
            </div>
          </div>
          {/* desc */}
          <div className='pr-20'>
            <h1 className='text-2xl font-semibold'>Xiphone 14 Pro Maxe</h1>
            <h3 className='mt-2 text-lg text-textInput'>Rp 1.000.000</h3>
            <hr className='h-px my-4 border-0 bg-strokeInput'></hr>

            <p className='mb-3 pr-28'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam placeat, illo praesentium cupiditate,
              sequi qui rem quidem ipsa explicabo nemo odit sapiente iusto perferendis tenetur, ab ex? Vitae inventore
              quod impedit perferendis.
            </p>
            <div className='flex flex-col'>
              Size
              <div className='mt-1 px-2.5 py-2 text-white rounded-md w-fit bg-cream1'>m</div>
            </div>
            <div className='mt-4 '>
              <button className='px-10 py-2 mr-3 border rounded-lg border-primaryBrown hover:bg-primaryBrown hover:border-white hover:text-white'>
                1
              </button>
              <button className='px-10 py-2 border rounded-lg border-primaryBrown hover:bg-primaryBrown hover:border-white hover:text-white'>
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
            <p className='py-6 pl-6 pr-16'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam deserunt perspiciatis doloribus vero!
              Ducimus, consequatur deleniti ipsam possimus fugit, beatae laborum vel numquam corporis dolorem debitis
              quibusdam ex molestiae molestias quidem illum nostrum quasi explicabo voluptas assumenda necessitatibus
              accusamus, ad natus. Laborum beatae fugit magni dolore cum omnis consequuntur assumenda? Iusto delectus
              itaque distinctio facere illum! Reprehenderit, voluptas expedita iusto possimus corporis excepturi
              delectus ad blanditiis nulla quae ipsum odit!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
