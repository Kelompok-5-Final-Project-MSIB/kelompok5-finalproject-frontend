import Navbar from '@/src/components/Navbar';
import ProductCard from '@/src/components/ProductCard';
import Image from 'next/image';
import { FaShoppingCart, FaRegTrashAlt } from 'react-icons/fa';

const products = [
  {
    name: 'Nike Airmax 270 react',
    originalPrice: 'Rp. 1.000.000',
    discountedPrice: 'Rp. 1.500.000',
    image: '/shoes1.png',
  },
  {
    name: 'Nike Airmax 270 react',
    originalPrice: 'Rp. 1.000.000',
    discountedPrice: 'Rp. 1.500.000',
    image: '/shoes1.png',
  },
  {
    name: 'Nike Airmax 270 react',
    originalPrice: 'Rp. 1.000.000',
    discountedPrice: 'Rp. 1.500.000',
    image: '/shoes1.png',
  },
  // Tambahkan produk lainnya di sini
];

const page = () => {
  return (
    // <section>
    //   <Navbar />
    //   <div className='px-4 md:px-20 lg:px-32 mt-[100px] mb-12'>
    //     <h1 className='px-4 text-2xl font-semibold'>Wishlist</h1>

    //     <div className='grid gap-6 mt-2 lg:grid-cols-2'>
    //       <div className='flex items-center px-4 py-3 shadow-md'>
    //         <div className='flex items-center justify-between w-full'>
    //           <div className='flex items-center'>
    //             <div className='w-20 h-20'>
    //               <Image
    //                 src='/shoes1.png'
    //                 width={100}
    //                 height={100}
    //                 alt='image shoes'
    //                 className='w-full'
    //               />
    //             </div>
    //             <div className='ml-5'>
    //               <h1 className='text-lg'>Nike Airmax 270 react</h1>
    //               <div className='flex items-center mt-2'>
    //                 <p className='line-through text-textInput'>Rp. 1.000.000</p>
    //                 <h3 className='text-lg font-semibold text-primaryBrown'>Rp. 1.500.000</h3>
    //               </div>
    //             </div>
    //           </div>

    //           <div className='flex flex-col items-start justify-start gap-5'>
    //             <button className='px-4 py-1 border rounded-full text-primaryBrown border-primaryBrown hover:bg-brown2 hover:text-white'>
    //               Add to cart
    //             </button>
    //             <div className='flex items-start gap-5'>
    //               <FaShoppingCart className='text-lg text-primaryBrown' />
    //               <FaRegTrashAlt className='text-lg' />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='flex items-center px-4 py-3 shadow-md'>
    //         <div className='flex items-center justify-between w-full'>
    //           <div className='flex items-center'>
    //             <div className='w-20 h-20'>
    //               <Image
    //                 src='/shoes1.png'
    //                 width={100}
    //                 height={100}
    //                 alt='image shoes'
    //                 className='w-full'
    //               />
    //             </div>
    //             <div className='ml-5'>
    //               <h1 className='text-lg'>Nike Airmax 270 react</h1>
    //               <div className='flex items-center mt-2'>
    //                 <p className='line-through text-textInput'>Rp. 1.000.000</p>
    //                 <h3 className='text-lg font-semibold text-primaryBrown'>Rp. 1.500.000</h3>
    //               </div>
    //             </div>
    //           </div>

    //           <div className='flex flex-col items-start justify-start gap-5'>
    //             <button className='px-4 py-1 border rounded-full text-primaryBrown border-primaryBrown hover:bg-brown2 hover:text-white'>
    //               Add to cart
    //             </button>
    //             <div className='flex items-start gap-5'>
    //               <FaShoppingCart className='text-lg text-primaryBrown' />
    //               <FaRegTrashAlt className='text-lg' />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section>
      <Navbar />
      <div className='px-4 md:px-20 lg:px-32 mt-[100px] mb-12'>
        <h1 className='px-4 text-2xl font-semibold'>Wishlist</h1>
        <div className='grid gap-6 mt-2 lg:grid-cols-2'>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              isInCart={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
