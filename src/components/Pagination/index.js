import React from "react";

export default function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={prevPage}
            className={`block px-3 py-2 ml-0 leading-tight bg-white rounded-md ${
              currentPage === 1
                ? "disabled text-gray-300 cursor-not-allowed"
                : "hover:bg-gray-100 hover:text-primary text-primary"
            }`}
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li key={pgNumber}>
            <button
              onClick={() => setCurrentPage(pgNumber)}
              className={`px-4 py-2 leading-tight rounded-md mx-1 ${
                currentPage === pgNumber
                  ? "bg-primary text-white border-primary hover:bg-primary-700 hover:text-white "
                  : "bg-white text-gray-500  hover:bg-gray-100 hover:text-gray-700 "
              }`}
            >
              {pgNumber}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`block px-3 py-2 ml-0 leading-tight bg-white rounded-md ${currentPage === pageNumbers.length ? "disabled text-gray-300 cursor-not-allowed" : "hover:bg-gray-100 hover:text-primary text-primary"}`}
            onClick={nextPage}
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
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
          </button>
        </li>
      </ul>
    </nav>
  );
}
