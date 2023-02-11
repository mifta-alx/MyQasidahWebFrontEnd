import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions/userAction";
import { FiArrowRight } from "react-icons/fi";
import axios from "axios";


export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  // const navigate = useNavigate()
  // const { getUserResult, getUserError, getUserLoading } = useSelector(
  //   (state) => state.userReducer
  // );
  // const dispatch = useDispatch();
    
  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);

  // const handleLogout = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("https://myqasidah.up.railway.app/logout").then(result => {
  //       if(result) {
  //         localStorage.removeItem('access_token')
  //         navigate("/");
  //       }
  //     });
  //   } catch (e) {
  //     console.log(e.response);
  //   }
  // };
  return (
    <>
      {/* {getUserResult ? ( */}
        {/* <nav className="bg-white px-4 md:px-[100px] py-4 md:py-[30px] w-full">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div className="font-pjs-bold text-[24px] md:text-[32px]">
              <p className="inline">My</p>
              <p className="inline text-primary">Qasidah</p>
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded={isOpen}
              onClick={() => setOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={24}
                easing="ease-in"
              />
            </button>
            <div
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                isOpen ? "" : "hidden"
              }`}
            >
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
                {getUserResult && getUserResult["role"] === "admin" && (
                  <li>
                    <Link
                      to={`/`}
                      className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-[10px]"
                    >
                      User
                    </Link>
                  </li>
                )}
                <li className="w-[1px] bg-gray-300" />
                <li className="bg-primary rounded-[5px] hover:bg-primary-700">
                  <a onClick={handleLogout}
                    className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:py-[10px] md:px-[25px]"
                  >
                    Akun
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : getUserLoading ? (
        <div>
          <div className="bg-white w-full h-full flex opacity-90 absolute">
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
          </div>
          <nav className="bg-white px-4 md:px-[100px] py-4 md:py-[30px] w-full">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <div className="font-pjs-bold text-[24px] md:text-[32px]">
                <p className="inline">My</p>
                <p className="inline text-primary">Qasidah</p>
              </div>
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded={isOpen}
                onClick={() => setOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  size={24}
                  easing="ease-in"
                />
              </button>
              <div
                className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                  isOpen ? "" : "hidden"
                }`}
              >
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
                    <Link
                      to={"login"}
                      className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:py-[10px] md:px-[25px]"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      ) : !getUserError ? (
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
      ) : ( */}
        <nav className="bg-white px-4 md:px-[100px] py-4 md:py-[30px] w-full">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div className="font-pjs-bold text-[24px] md:text-[32px]">
              <p className="inline">My</p>
              <p className="inline text-primary">Qasidah</p>
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded={isOpen}
              onClick={() => setOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={24}
                easing="ease-in"
              />
            </button>
            <div
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                isOpen ? "" : "hidden"
              }`}
            >
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
                  <Link
                    to={"login"}
                    className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:py-[10px] md:px-[25px]"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      {/* )} */}
      <Outlet />
    </>
  );
}
