


const Transaksi = () => {

    return (
        <>
        <section className='px-10 mt-12'>
        <h1 className='text-2xl font-bold'>Product</h1>
         <div className='h-screen mt-4 overflow-x-auto md:mt-6'>
        <div className="bg-white relative shadow-md sm:rounded-lg rounded-lg overflow-hidden">
            <div
              className="bg-cream1 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">

              <div
                className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">

                <h2 className="text-xl font-semibold text-white">DAFTAR TRANSAKSI</h2>
              </div>

              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label for="simple-search" className="sr-only">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                        viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                    <input type="text" name="keyword" id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-blue-900 block w-full pl-10 p-2 mr-3"
                      placeholder="Cari Transaksi">
                        </input>
                  </div>

                  <button type="submit"
                    className="flex items-center justify-center text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 ml-4">
                    <svg className="h-3.5 w-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    Cari
                  </button>
                  
                </form>
              </div>

            </div>
            <div className="overflow-x-auto">
              <table id="user-table" className="w-full text-sm text-gray-500">
                <thead className="text-xs text-gray-50 uppercase bg-cream1">
                <tr>
              <th className="px-6 p-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                  No
                </th>
                <th className="px-6 p-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                  Tracking No
                </th>
                <th className="px-6 p-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                  Name Pemebli
                </th>
                <th className="px-6 p-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                  Metode Pembayaran
                </th>
                <th className="px-6 p-4  bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                  Total Product
                </th>
                <th className="px-6 p-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                  Tanggal Order
                </th>
                <th className="px-6 p-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold ">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
            <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1.
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  #12345678
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Budi
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Mandiri
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  5
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  4-05-2024
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Rp.3.000.000
                </td>
              </tr>
              <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  2.
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  #12345678
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Siska
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  BNI
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                  8
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  4-05-2024
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Rp.2.000.000
                </td>
              </tr>
              <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  3.
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  #12345678
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Zahra
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  E - Wallet
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                  3
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  4-05-2024
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Rp.1.400.000
                </td>
              </tr>
              <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  4.
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  #12345678
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Inia
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  BCA
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  1
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  4-05-2024
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Rp.3.100.000
                </td>
              </tr>
              <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  5.
                </th>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  #12345678
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Pedro
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Mandiri
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                 2
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  4-05-2024
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Rp.5.230.000
                </td>
              </tr>


                </tbody>
              </table>
            </div>

            {/* <nav className="flex flex-col md:items-end justify-between items-start space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation">
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                    <a href=""
                      className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-blue-900 bg-white rounded-l-lg border border-blue-300 hover:bg-blue-100 hover:text-blue-700">
                      <span className="sr-only">Previous</span>
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m15 19-7-7 7-7" />
                      </svg>
                    </a>
                    <span
                      className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 cursor-not-allowed">
                      <span className="sr-only">Previous</span>
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m15 19-7-7 7-7" />
                      </svg>
                    </span>
                </li>
                  <li>
                    <a href=""
                      className="flex items-center justify-center text-sm py-2 px-3 leading-tight <?php echo $current_page === $i ? 'text-blue-600 bg-blue-50' : 'text-blue-900 bg-white'; ?> border border-blue-300 hover:bg-blue-100 hover:text-blue-700">
                    </a>
                  </li>
                <li>
                    <a href=""
                      className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-blue-900 bg-white rounded-r-lg border border-blue-300 hover:bg-blue-100 hover:text-blue-700">
                      <span className="sr-only">Next</span>
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m9 5 7 7-7 7" />
                      </svg>
                    </a>
                    <span
                      className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 cursor-not-allowed">
                      <span className="sr-only">Next</span>
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m9 5 7 7-7 7" />
                      </svg>
                    </span>
                </li>
              </ul>
            </nav> */}
            </div>
          </div>

        </section>
        
        </>

    )
}

export default Transaksi;