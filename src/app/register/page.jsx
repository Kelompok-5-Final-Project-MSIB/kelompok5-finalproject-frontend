'use client';
import AuthLayout from '@/src/components/AuthLayout';
import Input from '@/src/components/Input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const page = () => {
  const router = useRouter();
  const [formUser, setFormUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmation_password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmation_password: '',
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
    if (!formUser.password) {
      valid = false;
      errors.password = 'Confirmation password is required';
    } else if (formUser.password.length < 6) {
      valid = false;
      errors.password = 'Password must be at least 6 characters';
    } else if (formUser.password !== formUser.confirmation_password) {
      valid = false;
      errors.confirmation_password = 'Password does not match';
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
          <Input
            placeholder={'Confirmation Password'}
            name={'confirmation_password'}
            type='password'
            icon={true}
            onChange={handleChange}
            error={errors.confirmation_password}
          />
          <p className='mt-1 mb-4 text-sm text-right'>Forgot Password?</p>
          <button
            type='button'
            onClick={handleSubmit}
            className='w-full px-5 py-3 mb-2 text-base font-medium text-white rounded-lg bg-black2 hover:bg-black focus:ring-4 focus:ring-blue-300 me-2'
          >
            Sign Up
          </button>
        </form>
        <hr className='h-px my-6 border-0 bg-strokeInput'></hr>
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
