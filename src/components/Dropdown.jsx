'use client';
import React from 'react';

const Dropdown = ({ name, value, onChange, error, label = true, children }) => {
  return (
    <div className='my-3.5'>
      <label
        htmlFor={name}
        className={`${label ? 'block' : 'hidden'} block text-base font-medium mb-1 text-black capitalize`}
      >
        {name}
      </label>
      <div className='mb-4'>
        <div className='relative flex rounded-md shadow-sm ring-1 ring-inset ring-strokeInput'>
          <select
            name={name}
            id={name}
            className='block w-full px-5 py-3 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-strokeInput placeholder:text-grey sm:text-sm sm:leading-6 placeholder:font-medium placeholder:text-sm'
            value={value}
            onChange={onChange}
          >
            {children}
          </select>
        </div>
        {error && <p className='mt-2 text-sm text-red-600'>{error}</p>}
      </div>
    </div>
  );
};

export default Dropdown;
