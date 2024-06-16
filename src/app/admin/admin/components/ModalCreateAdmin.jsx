'use client';
import Input from '@/src/components/Input';
import { signUpAdmin } from '@/src/utils/slices/signUpSlice';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function ModalCreateAdmin({ setIsOpenModalCreate }) {
  const [formUser, setFormUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const token = session?.user?.accessToken;

  const handleChange = (e) => {
    setFormUser({ ...formUser, [e.target.name]: e.target.value });
  };

  const data = {
    name: formUser.name,
    email: formUser.email,
    password: formUser.password,
    password_confirmation: formUser.password_confirmation,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpAdmin({ userData: data, token: token }));
    setIsOpenModalCreate(false);
  };
  return (
    <>
      <div
        id='crud-modal'
        tabIndex='-1'
        aria-hidden='true'
        className='fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-gray-800 bg-opacity-50'
      >
        <div className='relative w-full max-w-screen-xl max-h-full p-4'>
          <div className='relative z-50 bg-white rounded-lg shadow-lg'>
            <div className='flex items-center justify-between p-4 border-b rounded-t md:p-5 '>
              <h3 className='text-lg font-semibold text-center text-primaryBrown '>Add Admin</h3>
              <button
                type='button'
                className='inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 '
                data-modal-toggle='crud-modal'
                onClick={() => setIsOpenModalCreate(false)}
              >
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='relative grid gap-4 p-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5'>
                <div className='w-full'>
                  <Input
                    placeholder={'Name'}
                    name={'name'}
                    type='text'
                    onChange={handleChange}
                  />
                </div>

                <div className='w-full'>
                  <Input
                    placeholder={'Email'}
                    name={'email'}
                    type='text'
                    onChange={handleChange}
                  />
                </div>
                <div className='w-full'>
                  <Input
                    placeholder={'Enter Password'}
                    name={'password'}
                    type='password'
                    icon={true}
                    onChange={handleChange}
                  />
                </div>
                <div className='w-full'>
                  <Input
                    placeholder={'Confirmation Password'}
                    name={'password_confirmation'}
                    type='password'
                    icon={true}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='relative flex items-center p-4 space-x-4'>
                <button
                  type='submit'
                  className='text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800'
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalCreateAdmin;
