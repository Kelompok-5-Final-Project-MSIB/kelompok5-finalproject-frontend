'use client';
import AuthLayout from '@/src/components/AuthLayout';
import Input from '@/src/components/Input';
import ModalAlert from '@/src/components/alert/ModalAlert';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  // console.log(session?.user?.role, status);
  const role = session?.user?.role;
  const [formUser, setFormUser] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validate = () => {
    let valid = true;
    let errors = {};

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await signIn('credentials', {
        email: formUser.email,
        password: formUser.password,
        redirect: false,
      });

      if (response.ok) {
        ModalAlert('Login', 'success');
      } else {
        ModalAlert('Login', 'error', `${response.error}`);
      }
    } else {
      ModalAlert('Login', 'error');
    }
  };

  useEffect(() => {
    if (role === 'admin') {
      router.push('/admin');
    }
    if (role === 'user') {
      router.push('/');
    }
  }, [role]);

  return (
    <AuthLayout title={'Nice to see you again!'}>
      <form>
        <Input
          placeholder={'Email'}
          name={'email'}
          type='email'
          onChange={handleChange}
          error={errors.email}
          label={false}
        />
        <Input
          placeholder={'Enter Password'}
          name={'password'}
          type='password'
          icon={true}
          onChange={handleChange}
          error={errors.password}
          label={false}
        />
        <p className='mt-1 mb-4 text-sm text-right'>Forgot Password?</p>
        <button
          onClick={handleSubmit}
          className='w-full px-5 py-3 mb-2 text-base font-medium text-white rounded-lg bg-black2 hover:bg-black focus:ring-4 focus:ring-blue-300 me-2'
        >
          Sign In
        </button>
      </form>
      <hr className='h-px my-6 border-0 bg-strokeInput'></hr>
      <p className='text-sm font-normal text-center text-slate-800 my-3.5'>
        Don`t have an account ?{' '}
        <span
          className='font-bold underline cursor-pointer'
          onClick={() => router.push('/register')}
        >
          Create account
        </span>
      </p>
    </AuthLayout>
  );
};

export default Page;
