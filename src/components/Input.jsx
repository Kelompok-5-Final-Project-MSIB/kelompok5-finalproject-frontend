'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeLowVision } from 'react-icons/fa6';

const Input = ({ name, placeholder, icon, value, onChange, type = 'text', error, label = true }) => {
  const [show, setShow] = useState(true);
  const [inputType, setInputType] = useState(type);

  const handleEyeShow = (e) => {
    e.preventDefault();
    if (inputType === 'password') {
      setShow(!show);
      setInputType(show ? 'text' : 'password');
    } else {
      setShow(!show);
      setInputType(show ? 'text' : 'password');
    }
  };
  return (
    <div className='my-3.5'>
      <label
        htmlFor={name}
        className={`${label ? 'block' : 'hidden'} block text-base font-medium mb-1  text-black capitalize`}
      >
        {name}
      </label>
      <div className='mb-4'>
        <div className='relative flex rounded-md shadow-sm ring-1 ring-inset ring-strokeInput'>
          {type === 'textarea' ? (
            <textarea
              name={name}
              id={name}
              autoComplete={name}
              className='flex-1 block w-full px-5 py-3 font-medium bg-transparent border-0 text-primary placeholder:text-grey sm:text-sm sm:leading-6 placeholder:font-medium placeholder:text-sm'
              placeholder={placeholder}
              defaultValue={value}
              onChange={onChange}
            />
          ) : (
            <>
              <input
                type={inputType}
                name={name}
                id={name}
                autoComplete={name}
                className='block w-full px-5 py-3 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-strokeInput'
                placeholder={placeholder}
                defaultValue={value}
                onChange={onChange}
              />
              {icon ? (
                <button
                  onClick={handleEyeShow}
                  className='absolute top-0 bottom-0 my-auto cursor-pointer right-5'
                >
                  {show ? <FaEyeLowVision /> : <FaEye />}
                </button>
              ) : null}
            </>
          )}
        </div>
        {error && <p className='mt-2 text-sm text-red-600'>{error}</p>}
      </div>
    </div>
  );
};

export default Input;
