import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiTrash, FiPlus } from "react-icons/fi";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function EditKitab() {
  const [title, setTitle] = useState("");
  const [title_arabic, setTitleArabic] = useState("");
  const [pengarang, setPengarang] = useState("");
  const [param, setParam] = useState([]);
  const { id } = useParams();
  const [msg, setMsg] = useState([]);
  const [text_of_page, setText] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getKitabById()
  }, [id])

  const getKitabById = async () => {
    const res = await axios.get(`http://localhost:3001/kitab/${id}`);
    setTitle(res.data.title);
    setTitleArabic(res.data.title_arabic);
    setPengarang(res.data.pengarang);
    setText(res.data.page);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const page = text_of_page.map(({ parent, text_of_page }) => ({
      parent,
      text_of_page,
    }));
    try {
      const res = await axios.put(`http://localhost:3001/kitab/${id}`, {
        title,
        title_arabic,
        pengarang,
        page,
      });
      navigate(`/kitab/detail/${id}`, {
        state: { status: res.status, message: res.data.message },
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

  const handleAddParentHalaman = () => {
    setText([
      ...text_of_page,
      {
        parent: "bagian_" + (text_of_page.length + 1),
        text_of_page: [],
      },
    ]);
  };

  const handleRemoveParentHalaman = (index) => {
    const list = [...text_of_page];
    list.splice(index, 1);
    setText(list);
  };

  const handleInputChangeParentHalaman = (e, index) => {
    const value = e.target.value;
    const list = [...text_of_page];
    list[index].parent = value;
    setText(list);
  };

  const handleAddText = (index) => {
    const list = [...text_of_page];
    list[index].text_of_page.push({ text: "" });
    setText(list);
  };

  const handleRemoveText = (indexsub, indexparent) => {
    const list = [...text_of_page];
    list[indexparent].text_of_page.splice(indexsub, 1);
    setText(list);
  };
  
  const handleInputChangeText = (e, indexsub, indexparent) => {
    const value = e.target.value;
    const list = [...text_of_page];
    list[indexparent].text_of_page[indexsub].text = value;
    setText(list);
  };

  return (
    <div className="px-4 md:px-[100px] pb-6">
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
          <li>
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
              <Link
                to={"../kitab"}
                className="ml-1 text-sm font-pjs-medium text-gray-700 hover:text-primary"
              >
                Kitab
              </Link>
            </div>
          </li>
          <li>
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
              <Link
                to={`../kitab/detail/${id}`}
                className="ml-1 text-sm font-pjs-medium text-gray-700 hover:text-primary"
              >
                {title}
              </Link>
            </div>
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
                Edit Kitab
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="w-full p-4 mt-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <form onSubmit={handleSubmit}>
          <div className={param.includes("title") ? "mb-4" : "mb-6"}>
            <div className="relative">
              <input
                type="text"
                id="floating_outlined_title"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border border-1 appearance-none focus:outline-none focus:ring-0 peer 
                ${
                  param.includes("title")
                    ? "border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
                    : "bg-transparent border-gray-300 text-gray-900 focus:border-primary focus:ring-primary"
                }`}
                placeholder=" "
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label
                htmlFor="floating_outlined_title"
                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-geay-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white ${
                  param.includes("title") ? "text-red-700" : "text-gray-500"
                }`}
              >
                Nama Kitab
              </label>
            </div>
            {param.includes("title") && (
              <p className="mt-2 text-xs text-red-600 ">
                {msg.length < 36 ? msg[param.indexOf("title")] : msg}
              </p>
            )}
          </div>
          <div className={param.includes("title_arabic") ? "mb-4" : "mb-6"}>
            <div className="relative">
              <input
                type="text"
                id="floating_outlined_title_arabic"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border border-1 appearance-none focus:outline-none focus:ring-0 peer ${
                  param.includes("title_arabic")
                    ? "border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
                    : "bg-transparent border-gray-300 text-gray-900 focus:border-primary focus:ring-primary"
                }`}
                placeholder=" "
                value={title_arabic}
                onChange={(e) => setTitleArabic(e.target.value)}
              />
              <label
                htmlFor="floating_outlined_title_arabic"
                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-geay-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white ${
                  param.includes("title_arabic")
                    ? "text-red-700"
                    : "text-gray-500"
                }`}
              >
                Nama Kitab Arab
              </label>
            </div>
            {param.includes("title_arabic") && (
              <p className="mt-2 text-xs text-red-600 ">
                {msg.length < 36 ? msg[param.indexOf("title_arabic")] : msg}
              </p>
            )}
          </div>
          <div className={param.includes("pengarang") ? "mb-4" : "mb-6"}>
            <div className="relative">
              <input
                type="text"
                id="floating_outlined_record"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border border-1 appearance-none focus:outline-none focus:ring-0 peer ${
                  param.includes("pengarang")
                    ? "border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
                    : "bg-transparent border-gray-300 text-gray-900 focus:border-primary focus:ring-primary"
                }`}
                placeholder=" "
                value={pengarang}
                onChange={(e) => setPengarang(e.target.value)}
              />
              <label
                htmlFor="floating_outlined_record"
                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-geay-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white ${
                  param.includes("pengarang")
                    ? "text-red-700"
                    : "text-gray-500"
                }`}
              >
                Pengarang
              </label>
            </div>
            {param.includes("pengarang") && (
              <p className="mt-2 text-xs text-red-600 ">
                {msg.length < 36 ? msg[param.indexOf("pengarang")] : msg}
              </p>
            )}
          </div>
          <div className="flex-col">
            {text_of_page.map((data, index) => {
              return (
                <div className="grid gap-6 md:grid-2 mb-6 " key={index}>
                  <div className="flex flex-row">
                    <div className="relative w-full">
                      <div>
                        <input
                          type="text"
                          id="floating_outlined"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          onChange={(e) =>
                            handleInputChangeParentHalaman(e, index)
                          }
                          defaultValue={"bagian_" + (index + 1)}
                          disabled
                        />
                        <label
                          htmlFor="floating_outlined"
                          className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Bagian
                        </label>
                      </div>
                    </div>
                    {text_of_page.length !== 1 && (
                      <a
                        href={() => false}
                        onClick={() => handleRemoveParentHalaman(index)}
                        className="px-3.5 justify-center items-center flex ml-3 rounded-lg text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 "
                      >
                        <FiTrash size={18} />
                      </a>
                    )}
                    {text_of_page.length - 1 === index && (
                      <a
                        href={() => false}
                        onClick={() => handleAddParentHalaman()}
                        className="px-3 justify-center text-primary items-center flex ml-3 border border-primary rounded-lg hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-primary"
                      >
                        <FiPlus size={22} />
                      </a>
                    )}
                  </div>
                  {data.text_of_page.map((data, indexsub) => {
                    return (
                      <div className="flex flex-row" key={indexsub}>
                        <div className="relative w-full">
                          <div>
                            <textarea
                            rows={5}
                              // type="text"
                              id="floating_outlined"
                              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              value={data.text}
                              onChange={(e) =>
                                handleInputChangeText(e, indexsub, index)
                              }
                            />
                            <label
                              htmlFor="floating_outlined"
                              className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                            >
                              Text
                            </label>
                          </div>
                        </div>
                        <a
                          href={() => false}
                          onClick={() => handleRemoveText(indexsub, index)}
                          className="px-3.5 justify-center items-center text-sm flex ml-3 rounded-lg text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 "
                        >
                          <FiTrash size={18} className="mr-2" />
                          Text
                        </a>
                      </div>
                    );
                  })}
                  <a
                    onClick={() => handleAddText(index)}
                    className="flex items-center justify-center text-primary bg-white hover:bg-primary hover:text-white border border-1 border-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
                  >
                    <FiPlus className="inline" />
                    <p className="inline">Text</p>
                  </a>
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            className="text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
