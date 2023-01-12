import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#09755E'}}>
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            MyQasidah
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="mx-2 my-6 md:my-0">
                <Link to={`/`} className="nav-link text-white" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="mx-2 my-6 md:my-0">
                <Link to={`qasidah`} className="nav-link text-white">
                  Qasidah
                </Link>
              </li>
              <li className="mx-2 my-6 md:my-0">
                <Link to={`kitab`} className="nav-link text-white">
                  Kitab
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
