'use client';
import { FaShoppingCart, FaHeart, FaRegTrashAlt } from 'react-icons/fa';
import { calculateDiscountedPrice, formatToCurrency } from '../utils/convertion';
import { useDispatch } from 'react-redux';
import { deleteCart, getAllProductCart } from '../utils/slices/cartSlice';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const ProductCard = ({ product, isInCart, token }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDeleteCart = (id, e) => {
    e.preventDefault();
    dispatch(deleteCart({ id: id, token: token }));
    dispatch(getAllProductCart({ token: token }));
  };

  return (
    <div className='flex flex-col items-center justify-between px-4 py-3 shadow-md md:flex-row'>
      <div className='flex items-center cursor-pointer'>
        <div className={`w-20 h-20`}>
          <Image
            src={product.image}
            width={200}
            height={200}
            alt={product.name_product}
            priority={true}
            className='w-full'
            onClick={() => router.push(`/products/${product.id_product}`)}
          />
        </div>
        <div className={`ml-5 ${isInCart ? '' : 'ml-0'}`}>
          <h1 className='text-lg'>{product.name_product}</h1>
          <div className='flex items-center gap-3 mt-2'>
            <p className='line-through text-textInput'>{product.price}</p>
            <h3 className='text-lg font-semibold text-primaryBrown'>{formatToCurrency(product.discounted_price)}</h3>
          </div>
        </div>
      </div>
      <div className='flex gap-5'>
        {isInCart ? (
          <>
            <FaHeart className='text-lg text-primaryBrown hover:scale-110' />
            <FaRegTrashAlt
              className='text-lg hover:scale-110'
              onClick={(e) => handleDeleteCart(product.id_product, e)}
            />
          </>
        ) : (
          <div className='flex flex-col items-start justify-start gap-5'>
            <button className='px-4 py-1 border rounded-full text-primaryBrown border-primaryBrown hover:bg-brown2 hover:text-white'>
              Add to cart
            </button>
            <div className='flex items-start gap-5'>
              <FaShoppingCart className='text-lg text-primaryBrown hover:scale-110' />
              <FaRegTrashAlt className='text-lg hover:scale-110' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
