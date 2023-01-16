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
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={prevPage} style={{color: currentPage === 1 ? "" : "#09755E"}}>
            Previous
          </button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""}`}
          >
            <button
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              style={{backgroundColor: currentPage === pgNumber ? "#09755E" : "#FFFFFF", color: currentPage === pgNumber ? "#FFFFFF" : "#09755E", borderColor: currentPage === pgNumber ? "#09755E" : ""}}
            >
              {pgNumber}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button className="page-link" onClick={nextPage} style={{color: "#09755E"}}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
