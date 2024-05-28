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
