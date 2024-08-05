import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Pagination } from "../../components";

const Kitab = () => {
  const [data, setData] = useState([]);
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
    getKitab();
    setVisible(location?.state?.status === 201);
    const timeId = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => {
      clearTimeout(timeId);
    };
  }, [location]);

  window.history.replaceState({}, document.title);

  const getKitab = async () => {
    try {
      const response = await axios.get("http://localhost:3001/kitab");
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
                Kitab
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
                  Pengarang
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {data
                .slice(indexOfFirstRecord, indexOfLastRecord)
                .map((dataKitab, index) => {
                  return (
                    <tr className="bg-white hover:bg-gray-50" key={index}>
                      <td className="px-6 py-4">
                        {recordsPerPage * (currentPage - 1) + index + 1}
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-pjs-medium text-gray-900 whitespace-nowrap "
                      >
                        {dataKitab.title}
                      </th>
                      <td className="px-6 py-4 font-pjs-bold">
                        {dataKitab.title_arabic}
                      </td>
                      <td className="px-6 py-4 font-pjs-regular">
                        {dataKitab.pengarang}
                      </td>
                      <td className="px-6 py-4 font-pjs-regular">
                        <Link
                          to={`detail/${dataKitab._id}`}
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
            <span className="font-pjs-bold text-gray-900 ">{data.length}</span>
          </span>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </nav>
      </div>
    </div>
  );
};
export default Kitab;
