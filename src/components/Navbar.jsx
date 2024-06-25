'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart, FaHeart, FaUserCircle } from 'react-icons/fa';
import { signOut, useSession } from 'next-auth/react';
import Swal from 'sweetalert2';
const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const username = session?.user?.name;
  const path = usePathname();

  const navlink = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Products',
      link: '/products',
    },
    {
      name: 'Contact Us',
      link: '/contact',
    },
  ];
  const handleLogout = () => {
    Swal.fire({
      title: 'Apakah yakin?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#167F71',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Keluar',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        signOut({ callbackUrl: '/login' });
      }
    });
  };
  return (
    <>
      <nav className='fixed top-0 z-20 w-full bg-white border-b border-gray-200 shadow-md start-0 '>
        <div className='flex flex-wrap items-center justify-between px-4 md:px-10 py-2.5'>
          <Image
            src='/logo_navbar.svg'
            alt='Flowbite Logo'
            width={200}
            height={200}
            priority={true}
            className='w-[40%] md:w-[30%] lg:w-[12%]'
          />

          {/* dengan login */}
          <div className='flex items-center space-x-3 lg:order-2 md:space-x-0 rtl:space-x-reverse'>
            <div className={`${status === 'authenticated' || status === 'loading' ? 'flex' : 'hidden'} items-center`}>
              <span className='hidden md:flex'>
                <a
                  href='/cart'
                  className='p-2 rounded-lg cursor-pointer hover:bg-cream2/30'
                >
                  <FaShoppingCart className='text-xl text-primaryBrown' />
                </a>
              </span>
              <div className='flex items-center space-x-1 lg:order-2 md:space-x-0 rtl:space-x-reverse'>
                <button
                  type='button'
                  data-dropdown-toggle='dropdownHover'
                  data-dropdown-trigger='hover'
                  onClick={() => {
                    router.push('/user/profile');
                  }}
                  className='inline-flex items-center justify-center px-4 py-2 -mr-5 text-base font-medium rounded-lg cursor-pointer text-primaryBrown hover:bg-cream2/30 md:mr-0'
                >
                  <FaUserCircle className='mr-1 text-xl text-primaryBrown' />{' '}
                  {status == 'loading' ? 'loading' : username}
                </button>
                <div
                  className='z-50 hidden my-4 text-lg list-none divide-y divide-gray-100 rounded-lg shadow bg-cream2 '
                  id='dropdownHover'
                >
                  <ul
                    className='py-2 font-medium'
                    role='none'
                  >
                    <li className='cursor-pointer'>
                      <a
                        onClick={handleLogout}
                        className='block px-4 py-2 text-sm text-primaryBrown '
                        role='menuitem'
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* tanpa login */}
            <div
              className={`${status === 'unauthenticated' ? 'flex' : 'hidden'} items-center mr-1 font-medium lg:mr-0`}
            >
              <a
                href='/login'
                className='font-semibold md:mr-6 text-primaryBrown md:font-medium'
              >
                Login
              </a>
              <button
                type='button'
                className='md:flex hidden items-center px-6 py-2.5 text-sm font-semibold text-center rounded-full text-primaryBrown bg-cream1 hover:bg-cream2 hover:text-primaryBrown focus:ring-4 focus:outline-none focus:ring-cream2'
                onClick={() => router.push('/register')}
              >
                Sign Up Now{' '}
                <span className='ml-2'>
                  <IoIosArrowRoundForward />
                </span>
              </button>
            </div>
            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              className='inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-sticky'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <GiHamburgerMenu className='text-2xl text-primaryBrown' />
            </button>
          </div>

          <div
            className='items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1'
            id='navbar-sticky'
          >
            <ul className='flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg lg:p-0 bg-[#F9F4EE] lg:bg-transparent lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0'>
              {navlink.map((item, index) => (
                <li
                  key={index}
                  className='bg-white'
                >
                  <a
                    href={item.link}
                    className={`${path == item.link ? 'font-bold' : ''}
                     block px-3 py-2 text-center lg:bg-transparent hover:text-brown2 text-primaryBrown lg:p-0 active:scale-110`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className='flex justify-center bg-white md:hidden'>
                <div className='flex items-center'>
                  <a
                    href='/'
                    className='p-2 rounded-lg cursor-pointer hover:bg-cream2/30'
                  >
                    <FaHeart className='text-xl text-primaryBrown' />
                  </a>
                  <a
                    href='/'
                    className='p-2 rounded-lg cursor-pointer hover:bg-cream2/30'
                  >
                    <FaShoppingCart className='text-xl text-primaryBrown' />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
