'use client';
import { clearState, getAllUser, profileSelector } from '@/src/utils/slices/profileSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalCreateAdmin from './components/ModalCreateAdmin';
import ModalDeleteAdmin from './components/ModalDeleteAdmin';

const Page = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const { userData } = useSelector(profileSelector);
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredUsers = userData?.filter((admin) => admin.name.toLowerCase().includes(searchKeyword.toLowerCase()));

  useEffect(() => {
    dispatch(getAllUser());
    dispatch(clearState());
  }, [dispatch, userData]);

  return (
    <>
      <section className='px-10 mt-12'>
        <h1 className='text-2xl font-bold'>Admin</h1>
        <div className='h-screen mt-4 overflow-x-auto md:mt-6'>
          <div className='relative overflow-hidden bg-white rounded-lg shadow-md sm:rounded-lg'>
            <div className='flex flex-col items-center justify-between p-4 space-y-3 bg-cream1 md:flex-row md:space-y-0 md:space-x-4'>
              <div className='flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3'>
                <h2 className='text-xl font-semibold text-white'>DAFTAR ADMIN</h2>
              </div>

              <div className='w-full md:w-1/2'>
                <form className='flex items-center'>
                  <label
                    htmlFor='simple-search'
                    className='sr-only'
                  >
                    Search
                  </label>
                  <div className='relative w-full'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <svg
                        aria-hidden='true'
                        className='w-5 h-5 text-gray-500 dark:text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <input
                      type='text'
                      name='keyword'
                      id='simple-search'
                      className='block w-full p-2 pl-10 mr-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-blue-900'
                      placeholder='Cari Admin'
                      onChange={handleSearchChange}
                    ></input>
                  </div>

                  <a
                    onClick={() => setIsOpenModalCreate(true)}
                    type='button'
                    className='flex items-center justify-center px-4 py-2 ml-4 text-sm font-medium text-white bg-red-500 rounded-lg cursor-pointer hover:bg-red-600 focus:ring-4 focus:ring-red-300'
                  >
                    <svg
                      className='h-3.5 w-3.5 mr-2'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 20'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                      />
                    </svg>
                    Tambah
                  </a>
                </form>
              </div>
            </div>

            <div className='overflow-x-auto'>
              <table
                id='user-table'
                className='w-full text-sm text-left text-gray-500'
              >
                <thead className='text-xs uppercase text-gray-50 bg-cream1'>
                  <tr>
                    <th
                      scope='col'
                      className='px-2 py-3 lg:px-4 lg:py-3'
                    >
                      No
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-3 lg:px-4 lg:py-3'
                    >
                      Nama
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-3 lg:px-4 lg:py-3'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-3 lg:px-4 lg:py-3'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-3 lg:px-4 lg:py-3'
                    >
                      <span className='sr-only'>Action</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredUsers
                    ?.filter((user) => user.role === 'admin')
                    ?.map((user, index) => (
                      <tr
                        className='border-b hover:bg-gray-100'
                        key={index}
                      >
                        <th
                          scope='row'
                          className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'
                        >
                          {index + 1}
                        </th>
                        <td className='px-4 py-3'>{user?.name}</td>
                        <td className='px-4 py-3'>{user?.email}</td>
                        <td className='px-4 py-3'>{user?.role}</td>

                        <td className='px-4 py-3'>
                          <button
                            onClick={() => handleDeleteClick(1)}
                            type='button'
                            className='text-red-700 border-2 border-red-700 hover:bg-red-700 hover:text-white ml-2 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center'
                          >
                            <svg
                              className='w-4 h-4'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 18 20'
                            >
                              <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z'
                              />
                            </svg>
                            <span className='sr-only'>Icon Trash</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {isOpenModalCreate && <ModalCreateAdmin setIsOpenModalCreate={setIsOpenModalCreate} />}

      {isModalVisible && <ModalDeleteAdmin handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default Page;
