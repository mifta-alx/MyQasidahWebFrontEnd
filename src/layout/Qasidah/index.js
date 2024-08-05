import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Pagination } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/userAction";
import { FiArrowRight } from "react-icons/fi";

const Qasidah = () => {
  const [data, setData] = useState([]);
  const { getUserResult, getUserError, getUserLoading } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage, setRecords] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(data.length / recordsPerPage);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getQasidah();
    dispatch(getUser());
    setVisible(location?.state?.status === 201);
    const timeId = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => {
      clearTimeout(timeId);
    };
  }, [location, dispatch]);

  window.history.replaceState({}, document.title);

  const getQasidah = async () => {
    try {
      const response = await axios.get("http://localhost:3001/qasidahs");
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="px-4 md:px-[100px]">
      {visible && (
        <div
          id="toast-top-right"
          className="absolute flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow right-5"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ml-3 text-sm font-normal">
            {location?.state?.message}
          </div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 "
            data-dismiss-target="#toast-success"
            aria-label="Close"
            onClick={() => setVisible(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
      <nav
        className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to={"../"}
              className="inline-flex items-center text-sm font-pjs-medium text-gray-700 hover:text-primary"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Beranda
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-pjs-medium text-gray-500 md:ml-2">
                Qasidah
              </span>
            </div>
          </li>
        </ol>
      </nav>
      {/* {getUserResult ? (
        getUserResult["role"] === "admin" ? ( */}
          <div className="w-full p-4 mt-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-pjs-bold leading-none text-gray-900">
                Daftar Qasidah
              </h5>
              <Link
                to={`add`}
                className="text-sm font-medium text-white bg-primary hover:bg-primary-700 rounded-md px-4 py-2 "
              >
                Tambah
              </Link>
            </div>

            <div className="relative overflow-x-auto sm:rounded-lg">
              <div className="flex items-center justify-between pb-4">
                <div>
                  {/* <select
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 "
                value={recordsPerPage}
                onChange={(e) => setRecords(e.target.value)}
              >
                <option valuename={5}>5</option>
                <option valuename={10}>10</option>
                <option valuename={20}>20</option>
                <option valuename={30}>30</option>
                <option valuename={40}>40</option>
                <option valuename={50}>50</option>
              </select> */}
                  {/* <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 " type="button">
                  <svg className="w-4 h-4 mr-2 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                  Last 30 days
                  <svg className="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div id="dropdownRadio" className="z-10 w-48 hidden bg-white divide-y divide-gray-100 rounded-lg shadow" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style={{position:"absolute", inset:"auto auto 0px 0px",margin:"0px",  }}>
                  <ul className="p-3 space-y-1 text-sm text-gray-700" aria-labelledby="dropdownRadioButton">
                      <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                              <label for="filter-radio-example-1" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                          </div>
                      </li>
                      <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                              <label for="filter-radio-example-2" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                          </div>
                      </li>
                      <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                              <label for="filter-radio-example-3" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                          </div>
                      </li>
                      <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                              <label for="filter-radio-example-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                          </div>
                      </li>
                      <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                              <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                              <label for="filter-radio-example-5" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                          </div>
                      </li>
                  </ul>
              </div> */}
                </div>
                {/* <label for="table-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search for items"
                />
              </div> */}
              </div>
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Judul Qasidah
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Arabic
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Version
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tipe
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .slice(indexOfFirstRecord, indexOfLastRecord)
                    .map((dataQasidah, index) => {
                      return (
                        <tr className="bg-white hover:bg-gray-50" key={index}>
                          <td className="px-6 py-4">
                            {recordsPerPage * (currentPage - 1) + index + 1}
                          </td>
                          <th
                            scope="row"
                            className="px-6 py-4 font-pjs-medium text-gray-900 whitespace-nowrap "
                          >
                            {dataQasidah.title}
                          </th>
                          <td className="px-6 py-4 font-pjs-bold">
                            {dataQasidah.title_arabic}
                          </td>
                          <td className="px-6 py-4 font-pjs-regular">
                            {dataQasidah.version}
                          </td>
                          <td className="px-6 py-4 font-pjs-regular">
                            {dataQasidah.tipe}
                          </td>
                          <td className="px-6 py-4 font-pjs-regular">
                            <Link
                              to={`detail/${dataQasidah._id}`}
                              className="font-pjs-medium text-primary hover:underline"
                            >
                              Detail
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col md:flex-row items-center justify-center md:justify-between pt-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-pjs-regular mb-4 md:mb-0 text-gray-500">
                Showing{" "}
                <span className="font-pjs-bold text-gray-900">
                  {indexOfFirstRecord + 1} to{" "}
                  {indexOfLastRecord === recordsPerPage
                    ? indexOfLastRecord
                    : data.length}
                </span>{" "}
                of{" "}
                <span className="font-pjs-bold text-gray-900 ">
                  {data.length}
                </span>
              </span>
              <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </nav>
          </div>
        {/* ) : (
          <div className="w-full">
            {data
              .slice(indexOfFirstRecord, indexOfLastRecord)
              .map((dataQasidah, index) => {
                return (
                  <Link
                    to={`detail/${dataQasidah._id}`}
                    className="flex flex-col bg-gray-100 rounded-xl my-4 py-3 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300"
                    key={index}
                  >
                    <p className="font-pjs-semibold text-xs md:text-base">
                      {dataQasidah.title}
                    </p>
                    <p className="font-pjs-medium text-xs md:text-sm text-gray-400 mt-1">
                      {dataQasidah.version}
                    </p>
                    <div className="flex justify-end">
                      <p className="font-pjs-medium text-lg md:text-2xl mt-2">
                        {dataQasidah.title_arabic}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        )
      ) : getUserLoading ? (
        <div
          role="status"
          className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-red-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen flex-col md:px-0 px-4">
          <p className="font-pjs-semibold text-base text-primary">{}</p>
          <p className="font-pjs-bold text-5xl mt-2">{getUserError}.</p>
          <p className="font-pjs-regular text-gray-500 mt-2">
            Oops! Sorry, an expected error has occured.
          </p>
          <a
            className="flex-row flex items-center font-pjs-medium mt-6 text-base text-primary"
            href="../"
          >
            <p className="mr-1">Go back home</p>
            <FiArrowRight size={16} className="mt-[2px]" />
          </a>
        </div>
      )} */}
    </div>
  );
};
export default Qasidah;
