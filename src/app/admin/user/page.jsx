"use client";
import { useState } from 'react';


const Page = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setDeleteId(null);
  };

  return (
    <>
      <section className='px-10 mt-12'>
        <h1 className='text-2xl font-bold'>Product</h1>
        <div className='h-screen mt-4 overflow-x-auto md:mt-6'>
          <div className="bg-white relative shadow-md sm:rounded-lg rounded-lg overflow-hidden">
            <div className="bg-cream1 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <h2 className="text-xl font-semibold text-white">DAFTAR PEMBELI</h2>
              </div>

              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" name="keyword" id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-blue-900 block w-full pl-10 p-2 mr-3"
                      placeholder="Cari User">
                    </input>
                  </div>

                  <button type="submit"
                    className="flex items-center justify-center text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 ml-4">
                    <svg className="h-3.5 w-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    Cari
                  </button>
                </form>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table id="user-table" className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-50 uppercase bg-cream1">
                  <tr>
                    <th scope="col" className="lg:px-4 lg:py-3 px-2 py-3">No</th>
                    <th scope="col" className="lg:px-4 lg:py-3 px-2 py-3">Nama</th>
                    <th scope="col" className="lg:px-4 lg:py-3 px-2 py-3">Email</th>
                    <th scope="col" className="lg:px-4 lg:py-3 px-2 py-3">Alamat</th>
                    <th scope="col" className="lg:px-4 lg:py-3 px-2 py-3">
                      <span className="sr-only">Action</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b hover:bg-gray-100">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                      1
                    </th>
                    <td className="px-4 py-3">Bambang Pamungkas
                    </td>
                    <td className="px-4 py-3">Bambang@gmail.com
                    </td>
                    <td className="px-4 py-3">jl.sudirman
                    </td>

                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleDeleteClick(1)}
                        type="button"
                        className="text-red-700 border-2 border-red-700 hover:bg-red-700 hover:text-white ml-2 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                          viewBox="0 0 18 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                        </svg>
                        <span className="sr-only">Icon Trash</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {isModalVisible && (
        <div id="popup-modal-delete" tabIndex="-1"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-50">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow">
              <button type="button" onClick={handleCloseModal}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg className="mx-auto mb-4 text-red-600 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h3 className="mb-5 text-md font-normal text-gray-500">Apakah kamu yakin menghapus <span
                  className="font-medium">data ini</span>?</h3>
                <button onClick={handleCloseModal}
                  className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2 text-center mr-2">
                  Ya, saya yakin
                </button>
                <button onClick={handleCloseModal}
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2 hover:text-gray-900 focus:z-10">Batal</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
