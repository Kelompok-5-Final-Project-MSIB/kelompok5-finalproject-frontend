'use client';
import AuthLayout from '@/src/components/AuthLayout';
import Input from '@/src/components/Input';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser, signupSelector, clearState } from '@/src/utils/slices/signUpSlice';
import ModalAlert from '@/src/components/alert/ModalAlert';

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formUser, setFormUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const { isFetching, isSuccess, isError, errorMessage } = useSelector(signupSelector);
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
    if (!formUser.password_confirmation) {
      valid = false;
      errors.password_confirmation = 'Confirmation password is required';
    } else if (formUser.password.length < 6) {
      valid = false;
      errors.password_confirmation = 'Password must be at least 6 characters';
    } else if (formUser.password !== formUser.password_confirmation) {
      valid = false;
      errors.password_confirmation = 'Password does not match';
    }

    setErrors(errors);
    return valid;
  };

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
    if (validate()) {
      dispatch(signUpUser(data));
    } else {
      ModalAlert('Login', 'error');
    }
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      console.log(errorMessage);
      dispatch(clearState());
    }
    if (isSuccess) {
      ModalAlert('Register', 'success');
      router.push('/login');
      dispatch(clearState());
    }
  }, [isError, isSuccess]);
  return (
    <div>
      <AuthLayout
        title={'Create an account'}
        desc={'Hello there, Let’s start your journey with us.'}
      >
        <form>
          <Input
            placeholder={'Name'}
            name={'name'}
            onChange={handleChange}
            label={false}
            error={errors.name}
          />
          <Input
            placeholder={'Email'}
            name={'email'}
            type='email'
            onChange={handleChange}
            label={false}
            error={errors.email}
          />
          <Input
            placeholder={'Enter Password'}
            name={'password'}
            type='password'
            icon={true}
            onChange={handleChange}
            label={false}
            error={errors.password}
          />
          <Input
            placeholder={'Confirmation Password'}
            name={'password_confirmation'}
            type='password'
            icon={true}
            onChange={handleChange}
            label={false}
            error={errors.password_confirmation}
          />
          <p className='mt-1 mb-4 text-sm text-right'>Forgot Password?</p>
          <button
            type='button'
            onClick={handleSubmit}
            className='w-full px-5 py-3 mb-2 text-base font-medium text-white rounded-lg bg-black2 hover:bg-black focus:ring-4 focus:ring-blue-300 me-2'
          >
            {isFetching ? 'Loading...' : 'Sign Up'}
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
