'use client';
import Input from '@/src/components/Input';
import React, { useEffect, useState } from 'react';
import { addAddress, addressSelector, getCity, getProvince } from '@/src/utils/slices/addressSlice';
import { useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '@/src/components/Dropdown';
import ModalAlert from '@/src/components/alert/ModalAlert';
import { useRouter } from 'next/navigation';

const AddAddress = ({ setIsOpenModal }) => {
  const [selectedProvince, setSelectedProvince] = useState('1');
  const [selectedProvinceName, setSelectedProvinceName] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCityName, setSelectedCityName] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const router = useRouter();

  const [error, setError] = useState('');
  const { provinceData, isLoading, cityData: city, addressData, addAddressData } = useSelector(addressSelector);
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const token = session?.user?.accessToken;
  let province = provinceData.results;
  // console.log(addressData);
  // console.log(selectedProvinceName);

  const handleChange = (e) => {
    const selectedId = e.target.value;
    const selectedLabel = province.find((option) => option.province_id === selectedId)?.province || '';
    setSelectedProvince(e.target.value);
    setSelectedProvinceName(selectedLabel);
    if (e.target.value === '') {
      setError('Please select an option');
    } else {
      setError('');
    }
  };

  const handleCityChange = (e) => {
    const selectedId = e.target.value;
    const selectedLabel = city.find((option) => option.city_id === selectedId)?.city_name || '';
    setSelectedCity(selectedId);
    setSelectedCityName(selectedLabel);
    if (e.target.value === '') {
      setError('Please select an option');
    } else {
      setError('');
    }
  };

  const handleClickAddress = (e) => {
    e.preventDefault();
    const dataa = {
      province: selectedProvinceName,
      id_province: selectedProvince,
      id_city: selectedCity,
      city: selectedCityName,
      zip_code: zipCode,
      details: detailAddress,
    };

    dispatch(addAddress({ dataa, token }));
  };

  useEffect(() => {
    dispatch(getCity({ id: selectedProvince, token }));
  }, [selectedProvince]);

  useEffect(() => {
    if (token) {
      dispatch(getProvince({ token }));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (addAddressData.code === 200) {
      ModalAlert('Add address', 'success', 'add address');

      router.back();
    }
  }, [addAddressData]);
  //
  return (
    <>
      <section className='lg:ml-auto'>
        <div
          id='crud-modal'
          tabIndex='-1'
          aria-hidden='true'
          className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-x-hidden overflow-y-auto bg-black/30'
        >
          <div className='relative w-full max-w-screen-xl max-h-full p-4'>
            <div className='relative z-50 bg-white rounded-lg shadow-lg'>
              <div className='flex items-center justify-between p-4 border-b rounded-t md:p-5 '>
                <h3 className='text-lg font-semibold text-center text-primaryBrown '>New Address</h3>
                <button
                  type='button'
                  className='inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 '
                  data-modal-toggle='crud-modal'
                  onClick={() => setIsOpenModal(false)}
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
              <form action='#'>
                <div className='relative grid gap-4 p-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5'>
                  <div className='w-full'>
                    <Dropdown
                      name='province'
                      value={selectedProvince}
                      onChange={handleChange}
                      error={error}
                    >
                      {province?.map((option, index) => (
                        <option
                          key={index}
                          value={option.province_id}
                        >
                          {isLoading ? 'Loading...' : option.province}
                        </option>
                      ))}
                    </Dropdown>
                  </div>

                  <div className='w-full'>
                    {city && (
                      <Dropdown
                        name='city'
                        value={selectedCity}
                        onChange={handleCityChange}
                        error={error}
                      >
                        {city.map((option, index) => (
                          <option
                            key={index}
                            value={option.city_id}
                          >
                            {isLoading ? 'Loading...' : option.city_name}
                          </option>
                        ))}
                      </Dropdown>
                    )}
                  </div>
                  <div className='w-full'>
                    <Input
                      placeholder={'zip code'}
                      name={'zip_code'}
                      type='text'
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>

                  <div className='sm:col-span-2'>
                    <Input
                      placeholder={'detail address'}
                      name={'detail_adress'}
                      type='textarea'
                      onChange={(e) => setDetailAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className='relative flex items-center p-4 space-x-4'>
                  <button
                    type='submit'
                    className='text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800'
                    onClick={handleClickAddress}
                  >
                    Add Address
                  </button>
                  <button
                    type='button'
                    className='text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500  dark:hover:bg-red-600 dark:focus:ring-red-900'
                  >
                    <svg
                      className='w-5 h-5 mr-1 -ml-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddAddress;
