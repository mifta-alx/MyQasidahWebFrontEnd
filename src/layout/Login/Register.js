import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Mockup1 } from "../../assets";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("user");
  const refresh_token = ''
  const [param, setParam] = useState([]);
  const [msg, setMsg] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [empty, setEmpty] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://myqasidah.up.railway.app/signup", {
        username,
        email,
        password,
        role,
        refresh_token
      });
      navigate("/login");
    } catch (e) {
      handleMsg(e.response.data.param, e.response.data.message);
      console.log(e.response);
    }
  };
  const handleMsg = (paramVal, msgVal) => {
    setParam(paramVal);
    setMsg(msgVal);
  };

  const removeObject = (arr, id) => {
    const objWithIdIndex = arr.findIndex((obj, index) => index === id);
    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
    return arr;
  };

  const validateEmail = (value) => {
    removeObject(msg, param.lastIndexOf("email"));
    removeObject(param, param.lastIndexOf("email"));
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.length < 1) {
      setEmpty(true);
      setErrorEmail(true);
      setEmail();
    } else {
      setEmpty(false);
      if (value.match(emailValidation)) {
        setErrorEmail(false);
        setEmail(value);
      } else {
        setErrorEmail(true);
        setEmail(value);
      }
    }
  };
  return (
    <div className="flex justify-center">
      <div className="md:grid grid-cols-2 gap-4 py-6 md:py-10 w-full md:px-3 lg:px-6 xl:px-12 ">
        <div className="hidden md:flex justify-center ">
          <img src={Mockup1} className="max-w-xs lg:max-w-sm" alt="mockup" />
        </div>
        <div className="md:px-10 xl:px-24">
          <div className="md:drop-shadow-md bg-white px-8 py-6 rounded-lg">
            <div className="flex-col flex items-center mb-6">
              <p className="font-pjs-bold text-xl block">Daftar Sekarang</p>
              <p className="font-pjs-regular text-sm text-gray-500 mt-1">
                Sudah punya akun MyQasidah?{" "}
                <Link
                  to={"../login"}
                  className="font-pjs-medium text-primary cursor-pointer"
                >
                  Masuk
                </Link>
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className={param.includes("username") ? "mb-4" : "mb-6"}>
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined_username"
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border border-1 appearance-none focus:outline-none focus:ring-1 focus:border-primary focus:ring-primary peer first-letter 
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
                    className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-geay-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white ${
                      param.includes("username")
                        ? "text-red-700"
                        : "text-gray-500"
                    }`}
                  >
                    Username
                  </label>
                </div>
                {param.includes("username") && (
                  <p className="mt-2 text-xs text-red-600 ">
                    {msg[param.indexOf("username")]}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined_email"
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border border-1 appearance-none focus:outline-none focus:ring-1 focus:border-primary focus:ring-primary peer 
                    ${
                      param.includes("email") || errorEmail
                        ? "border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
                        : "bg-transparent border-gray-300 text-gray-900 focus:border-primary focus:ring-primary"
                    } 
                    `}
                    placeholder=" "
                    value={email || ""}
                    onChange={(e) => validateEmail(e.target.value)}
                  />
                  <label
                    htmlFor="floating_outlined_email"
                    className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-geay-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white ${
                      param.includes("email") ? "text-red-700" : "text-gray-500"
                    }`}
                  >
                    Email
                  </label>
                </div>
                <p
                  className={`mt-2 text-xs ${
                    errorEmail || param.includes("email")
                      ? "text-red-600"
                      : "text-gray-400"
                  }`}
                >
                  {param.includes("email")
                    ? msg[param.indexOf("email")]
                    : empty
                    ? "Email tidak boleh kosong!"
                    : !errorEmail
                    ? "Contoh: contoh@myqasidah.com"
                    : "Format Email Salah"}
                </p>
              </div>
              <div className={param.includes("password") ? "mb-4" : "mb-6"}>
                <div className="relative">
                  <input
                    type={isShow ? "text" : "password"}
                    id="floating_outlined_password"
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border border-1 appearance-none focus:outline-none focus:ring-1 focus:border-primary focus:ring-primary peer 
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
                        : "text-gray-500"
                    }`}
                  >
                    Password
                  </label>
                  <a
                    className={`absolute top-4 z-10 right-1 px-2 cursor-pointer text-gray-500 ${
                      param.includes("password")
                        ? "text-red-700"
                        : "text-gray-500"
                    }`}
                    onClick={() => setIsShow(!isShow)}
                  >
                    {isShow ? <FiEye /> : <FiEyeOff />}
                  </a>
                </div>
                {param.includes("password") && (
                  <p className="mt-2 text-xs text-red-600 ">
                    {msg[param.indexOf("password")]}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className={`mb-6 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center 
                    text-white bg-primary hover:bg-primary-700 focus:ring-1
                `}
              >
                Daftar
              </button>
            </form>
            <div className="flex justify-center text-center">
              <p className="text-xs font-pjs-regular overflow-hidden text-gray-600">
                Dengan mendaftar, saya menyetujui <br />
                <span className="text-primary">
                  Syarat dan Ketentuan
                </span> serta{" "}
                <span className="text-primary">Kebijakan Privasi</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
