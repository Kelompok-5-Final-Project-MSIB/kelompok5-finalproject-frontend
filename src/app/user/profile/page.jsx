'use client';
import Input from '@/src/components/Input';
import Navbar from '@/src/components/Navbar';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { FaImage } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import { MdOutlineLogout } from 'react-icons/md';
import { FaRegAddressBook } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { signOut, useSession } from 'next-auth/react';
import { clearState, getUserData, profileSelector } from '@/src/utils/slices/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import AddAddress from './components/AddAddress';

const page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const token = session?.user?.accessToken;
  const dispatch = useDispatch();

  const { userData } = useSelector(profileSelector);
  console.log(userData);

  const handleGetProfile = () => {
    dispatch(getUserData({ token }));
  };

  useEffect(() => {
    if (status === 'authenticated' && token) {
      handleGetProfile();
      dispatch(clearState());
    }
  }, [token]);

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
    <section>
      <Navbar />
      <div className='px-4 md:px-14 lg:px-28 mt-[100px] mb-12'>
        <button
          className='flex items-center font-semibold text-primaryBrown'
          onClick={() => router.push('/')}
        >
          <span className='mr-2'>
            <IoMdArrowBack />
          </span>{' '}
          Back to Home
        </button>

        {/* body profile */}
        <div className='mt-6 border rounded-lg border-cream1'>
          <div className='py-3 text-lg font-medium text-center text-white rounded-t-lg bg-cream1'>Akun</div>
          <div className='flex flex-col w-full px-6 py-4 md:flex-row'>
            {/* left */}
            <div className='w-full md:w-1/2 md:pr-20 lg:pr-56'>
              <ul>
                <li className='py-2 mb-4 border-b cursor-pointer border-b-strokeInput'>
                  <p
                    href=''
                    className='flex items-center font-medium hover:text-cream3 text-cream1'
                  >
                    <span className='mr-3'>
                      <RiEdit2Line className='text-2xl' />
                    </span>{' '}
                    Profile Saya
                  </p>
                </li>
                <li className='py-2 mb-4 border-b cursor-pointer border-b-strokeInput'>
                  {/* <p className='flex items-center font-medium text-cream1'>
                    <span className='mr-3'>
                      <FaRegAddressBook className='text-2xl' />
                    </span>{' '}
                    Alamat Saya
                  </p> */}
                  <AddAddress />
                </li>
                <li
                  className='py-2 mb-4 border-b cursor-pointer hover:text-cream3 border-b-strokeInput'
                  onClick={handleLogout}
                >
                  <p className='flex items-center font-medium hover:text-cream3 text-cream1'>
                    <span className='mr-3'>
                      <MdOutlineLogout className='text-2xl' />
                    </span>{' '}
                    Keluar
                  </p>
                </li>
              </ul>
            </div>

            {/* right */}
            <div className='w-full md:w-1/2 md:pr-20 lg:pr-28'>
              <div className='flex items-center justify-center'>
                <label
                  htmlFor='file-upload'
                  className='cursor-pointer'
                >
                  <div className='relative flex items-center justify-center w-24 h-24 text-white border-2 rounded-full border-primaryBrown hover:bg-primaryBrown-dark'>
                    <Image
                      src={'/shoes1.png'}
                      width={500}
                      height={500}
                      alt='shoes'
                      className='rounded-full'
                    />
                    <div className='absolute flex items-center justify-center bg-white -bottom-2 w-7 h-7 right-2'>
                      <FaImage className='text-xl text-primaryBrown' />
                    </div>
                  </div>

                  <input
                    id='file-upload'
                    type='file'
                    className='hidden'
                  />
                </label>
              </div>

              <form
                action=''
                className='w-full mt-6'
              >
                <Input
                  placeholder={'Name'}
                  name={'name'}
                  value={userData?.name}
                />
                <Input
                  placeholder={'email'}
                  name={'email'}
                  value={userData?.email}
                />
                <button className='w-full py-3 font-medium text-white rounded-full bg-cream1'>
                  Simpan Profil Saya
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
