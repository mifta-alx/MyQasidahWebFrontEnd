import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Mockup1 } from "../../assets";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [param, setParam] = useState([]);
  const [msg, setMsg] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setVisible(location?.state?.status === 201);
    const timeId = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => {
      clearTimeout(timeId);
    };
  }, []);

  window.history.replaceState({}, document.title);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3001/login", {
          username,
          password,
        })
        .then((result) => {
          if (result) {
            navigate("/");
          }
        });
    } catch (e) {
      handleMsg(e.response.data.param, e.response.data.message);
      console.log(e.response);
    }
  };

  const handleMsg = (paramVal, msgVal) => {
    setParam(paramVal);
    setMsg(msgVal);
  };

  return (
    <div className="flex justify-center">
      {visible && (
        <div
          id="toast-top-right"
          className="absolute z-20 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow right-5"
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
      <div className="md:grid grid-cols-2 gap-4 py-6 md:py-10 w-full md:px-3 lg:px-6 xl:px-12 ">
        <div
          className="hidden md:flex justify-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src={Mockup1} className="max-w-xs lg:max-w-sm" alt="mockup" />
        </div>
        <div
          className="md:px-10 xl:px-24"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div className="md:drop-shadow-md bg-white px-8 py-6 rounded-lg">
            <div className="flex-col flex items-center mb-6">
              <p className="font-pjs-bold text-xl block">Login</p>
              <p className="font-pjs-regular text-sm text-gray-500 mt-1">
                Selamat datang kembali!
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={param.includes("username") ? "mb-4" : "mb-6"}>
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined_username"
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border border-1 appearance-none focus:outline-none focus:ring-1 peer first-letter 
                    ${
                      param.includes("username")
                        ? "border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
                        : "bg-transparent border-gray-300 text-gray-900 focus:border-primary focus:ring-primary"
                    } `}
                    placeholder=" "
                    value={username || ""}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label
                    htmlFor="floating_outlined_username"
                    className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white ${
                      param.includes("username")
                        ? "text-red-700"
                        : "text-gray-500 peer-focus:text-primary"
                    }`}
                  >
                    Username atau Email
                  </label>
                </div>
                {param.includes("username") && (
                  <p className="mt-2 text-xs text-red-600 ">
                    {msg.length < 36 ? msg[param.indexOf("username")] : msg}
                  </p>
                )}
              </div>
              <div className={param.includes("password") ? "mb-4" : "mb-6"}>
                <div className="relative">
                  <input
                    type={isShow ? "text" : "password"}
                    id="floating_outlined_password"
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border border-1 appearance-none focus:outline-none focus:ring-1 peer 
                    ${
                      param.includes("password")
                        ? "border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
                        : "bg-transparent border-gray-300 text-gray-900 focus:border-primary focus:ring-primary"
                    } 
                    `}
                    placeholder=" "
                    value={password || ""}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="floating_outlined_password"
                    className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-geay-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white ${
                      param.includes("password")
                      ? "text-red-700"
                      : "text-gray-500 peer-focus:text-primary"
                    }`}
                  >
                    Password
                  </label>
                  <a
                    className={`absolute top-4 z-10 right-1 px-2 cursor-pointer text-gray-500 ${
                      param.includes("password")
                      ? "text-red-700"
                      : "text-gray-500 peer-focus:text-primary"
                    }`}
                    onClick={() => setIsShow(!isShow)}
                  >
                    {isShow ? <FiEye /> : <FiEyeOff />}
                  </a>
                </div>
                {param.includes("password") && (
                  <p className="mt-2 text-xs text-red-600 ">
                    {msg.length < 35 ? msg[param.indexOf("password")] : msg}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className={`mb-6 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center 
                    text-white bg-primary hover:bg-primary-700 focus:ring-1
                `}
              >
                Login
              </button>
            </form>
            <div className="flex justify-center text-center">
              <p className="font-pjs-regular text-xs text-gray-500 mt-1">
                Belum punya akun MyQasidah?{" "}
                <Link
                  to={"../signup"}
                  className="font-pjs-medium text-primary cursor-pointer"
                >
                  Daftar
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
