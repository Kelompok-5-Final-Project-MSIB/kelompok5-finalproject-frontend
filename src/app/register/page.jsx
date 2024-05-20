'use client';
import AuthLayout from '@/components/AuthLayout';
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const page = () => {
  const router = useRouter();
  const [formUser, setFormUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validate = () => {
    let valid = true;
    let errors = {};

    if (!formUser.name) {
      valid = false;
      errors.name = 'Name is required';
    }

    if (!formUser.email) {
      valid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formUser.email)) {
      valid = false;
      errors.email = 'Email is invalid';
    }

    if (!formUser.password) {
      valid = false;
      errors.password = 'Password is required';
    } else if (formUser.password.length < 6) {
      valid = false;
      errors.password = 'Password must be at least 6 characters';
    }

    setErrors(errors);
    return valid;
  };

  const handleChange = (e) => {
    setFormUser({ ...formUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Register is valid');
    } else {
      alert('register is invalid');
    }
  };
  return (
    <div>
      <AuthLayout
        title={'Create an account'}
        desc={'Hello there, Let’s start your journey with us.'}
      >
        <form>
          <Input
            placeholder={'username'}
            name={'name'}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            placeholder={'Email'}
            name={'email'}
            type='email'
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            placeholder={'Enter Password'}
            name={'password'}
            type='password'
            icon={true}
            onChange={handleChange}
            error={errors.password}
          />
          <p className='mt-1 mb-4 text-sm text-right'>Forgot Password?</p>
          <button
            type='button'
            onClick={handleSubmit}
            class='text-white bg-black2 hover:bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 me-2 mb-2 w-full'
          >
            Sign Up
          </button>
        </form>
        <hr class='h-px my-6 bg-strokeInput border-0'></hr>
        <p className='text-sm font-normal text-center text-slate-800 my-3.5'>
          Already have an account ?{' '}
          <span
            className='font-bold underline cursor-pointer'
            onClick={() => router.push('/login')}
          >
            Login Now
          </span>
        </p>
      </AuthLayout>
    </div>
  );
};

export default page;
