import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import "../App.css";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);
  const setToggle = navbar
    ? "items-center justify-between w-full md:flex md:w-auto md:order-1"
    : "items-center hidden justify-between w-full md:flex md:w-auto md:order-1";
  return (
    <>
      <nav className="bg-white px-4 md:px-[100px] py-4 md:py-[30px] w-full">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="font-pjs-bold text-[24px] md:text-[32px]">
            <p className="inline">My</p>
            <p className="inline text-primary">Qasidah</p>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={navbar}
            onClick={() => setNavbar(!navbar)}
          >
            <span className="sr-only">Open main menu</span>
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <div className={setToggle}>
            <ul className="flex flex-col p-[10px] mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-pjs-regular md:border-0 md:bg-white">
              <li>
                <Link
                  to={`/`}
                  className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-[10px]"
                  aria-current="page"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to={`qasidah`}
                  className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-[10px]"
                >
                  Qasidah
                </Link>
              </li>
              <li>
                <Link
                  to={`kitab`}
                  className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-[10px]"
                >
                  Kitab
                </Link>
              </li>
              <li className="w-[1px] bg-gray-300" />
              <li className="bg-primary rounded-[5px] hover:bg-primary-700">
                <Link className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:py-[10px] md:px-[25px]">
                  Login
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
