import axios from "axios";
import React, { useState } from "react";
import { FiTrash, FiPlus } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

export default function AddQasidah() {
  const [title, setTitle] = useState("");
  const [title_arabic, setTitleArabic] = useState("");
  const [version, setVersion] = useState("");
  const [error, setError] = useState([]);
  const param = error.map((data) => data.param);
  const [reff, setReff] = useState([
    {
      parent: "baris_1",
      reff: [],
    },
  ]);
  const [lirik, setLirik] = useState([
    {
      parent: "baris_1",
      lirik: [],
    },
  ]);
  const [expand, setExpand] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listTipe = ["Arabic", "Indonesia"];
  const [tipe, setTipe] = useState("Arabic");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textreff = reff.map(({ parent, reff }) => ({ parent, reff }));
    const textlirik = lirik.map(({ parent, lirik }) => ({ parent, lirik }));
    try {
      const res = await axios.post("http://localhost:3001/qasidahs", {
        title,
        title_arabic,
        version,
        tipe,
        textreff,
        textlirik,
      });
      navigate("/qasidah", {
        state: { status: res.status, message: res.data.message },
      });
    } catch (e) {
      setError(e.response.data.message);
      console.log(e);
    }
  };
  //add Dynamical Multiple Input parent Reff
  const handleAddParentReff = () => {
    setReff([
      ...reff,
      {
        parent: "baris_" + (reff.length + 1),
        reff: [],
      },
    ]);
  };
  //delete Dynamical Multiple Input parent Reff
  const handleRemoveParentReff = (index) => {
    const list = [...reff];
    list.splice(index, 1);
    setReff(list);
  };
  //onChange input parent reff
  const handleInputChangeParentReff = (e, index) => {
    const value = e.target.value;
    const list = [...reff];
    list[index].parent = value;
    setReff(list);
  };
  //add Dynamical Multiple Input sub Reff
  const handleAddSubReff = (index) => {
    const list = [...reff];
    list[index].reff.push({ subreff: "" });
    setReff(list);
  };
  //delete Dynamical Multiple Input sub Reff
  const handleRemoveSubReff = (indexsub, indexparent) => {
    const list = [...reff];
    list[indexparent].reff.splice(indexsub, 1);
    setReff(list);
  };
  //onChange input sub reff
  const handleInputChangeSubReff = (e, indexsub, indexparent) => {
    const value = e.target.value;
    const list = [...reff];
    list[indexparent].reff[indexsub].subreff = value;
    setReff(list);
  };

  //add Dynamical Multiple Input parent Lirik
  const handleAddParentLirik = () => {
    setLirik([
      ...lirik,
      {
        parent: "baris_" + (lirik.length + 1),
        lirik: [],
      },
    ]);
  };
  //delete Dynamical Multiple Input parent lirik
  const handleRemoveParentLirik = (index) => {
    const list = [...lirik];
    list.splice(index, 1);
    setLirik(list);
  };
  //onChange input parent reff
  const handleInputChangeParentLirik = (e, index) => {
    const value = e.target.value;
    const list = [...lirik];
    list[index].parent = value;
    setLirik(list);
  };
  //add Dynamical Multiple Input sub lirik
  const handleAddSubLirik = (index) => {
    const list = [...lirik];
    list[index].lirik.push({ sublirik: "" });
    setLirik(list);
  };
  //delete Dynamical Multiple Input sub Lirik
  const handleRemoveSubLirik = (indexsub, indexparent) => {
    const list = [...lirik];
    list[indexparent].lirik.splice(indexsub, 1);
    setLirik(list);
  };
  //onChange input sub reff
  const handleInputChangeSubLirik = (e, indexsub, indexparent) => {
    const value = e.target.value;
    const list = [...lirik];
    list[indexparent].lirik[indexsub].sublirik = value;
    setLirik(list);
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
                to={"../qasidah"}
                className="ml-1 text-sm font-pjs-medium text-gray-700 hover:text-primary"
              >
                Qasidah
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
                Tambah Qasidah
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="w-full p-4 mt-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                id="floating_outlined"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border border-1 appearance-none focus:outline-none focus:ring-0 peer ${
                  param.includes("title")
                    ? " border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
                    : "bg-transparent border-gray-300 text-gray-900 focus:border-gray-600"
                }`}
                placeholder=" "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label
                htmlFor="floating_outlined"
                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-geay-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white ${
                  param.includes("title") ? "text-red-700" : "text-gray-500"
                }`}
              >
                Judul Qasidah
              </label>
            </div>
            {param.includes("title") && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Judul qasidah harus
                diisi!
              </p>
            )}
          </div>
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                id="floating_outlined"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border border-1 appearance-none focus:outline-none focus:ring-0 peer ${
                  param.includes("title_arabic")
                    ? " border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
                    : "bg-transparent border-gray-300 text-gray-900 focus:border-gray-600"
                }`}
                placeholder=" "
                value={title_arabic}
                onChange={(e) => setTitleArabic(e.target.value)}
              />
              <label
                htmlFor="floating_outlined"
                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-geay-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white ${
                  param.includes("title_arabic")
                    ? "text-red-700"
                    : "text-gray-500"
                }`}
              >
                Judul Arab
              </label>
            </div>
            {param.includes("title_arabic") && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Judul arab qasidah
                harus diisi!
              </p>
            )}
          </div>
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                id="floating_outlined"
                className={`block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border border-1 appearance-none focus:outline-none focus:ring-0 peer ${
                  param.includes("version")
                    ? " border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
                    : "bg-transparent border-gray-300 text-gray-900 focus:border-gray-600"
                }`}
                placeholder=" "
                value={version}
                onChange={(e) => setVersion(e.target.value)}
              />
              <label
                htmlFor="floating_outlined"
                className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-geay-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 bg-white ${
                  param.includes("version") ? "text-red-700" : "text-gray-500"
                }`}
              >
                Versi
              </label>
            </div>
            {param.includes("version") && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Versi qasidah harus
                diisi!
              </p>
            )}
          </div>
          <div className="relative mb-6 z-30">
            <button
              type="button"
              className="block w-full cursor-default rounded-lg border border-gray-300 bg-transparent py-2 pl-3 pr-10 text-left shadow-sm focus:border-primary  appearance-none peer focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              aria-haspopup="listbox"
              aria-expanded={expand}
              aria-labelledby="listbox-label"
              onClick={() => setExpand(!expand)}
            >
              <span className="block truncate">{listTipe[selectedIndex]}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <ul
              className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${
                expand ? "block" : "hidden"
              }`}
              tabIndex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-option-3"
            >
              {listTipe.map((list, index) => {
                return (
                  <li
                    className={`text-gray-900 relative cursor-default select-none py-2  pr-9 ${
                      selectedIndex === index ? "bg-primary" : "bg-white"
                    }`}
                    id="listbox-option-0"
                    role="option"
                    aria-selected={selectedIndex === index ? true : false}
                    key={index}
                    onClick={() => {
                      setSelectedIndex(index);
                      setExpand(!expand);
                      setTipe(listTipe[index]);
                    }}
                  >
                    <span
                      className={`ml-3 block truncate ${
                        selectedIndex === index
                          ? "font-pjs-bold text-white"
                          : "font-pjs-regular"
                      }`}
                    >
                      {list}
                    </span>
                    {selectedIndex === index ? (
                      <span className="text-white absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    ) : (
                      <></>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid md:gap-6 md:grid-cols-2">
            <div className="flex-col">
              {reff.map((data, index) => {
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
                              handleInputChangeParentReff(e, index)
                            }
                            defaultValue={"baris_" + (index + 1)}
                            disabled
                          />
                          <label
                            htmlFor="floating_outlined"
                            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                          >
                            Reff
                          </label>
                        </div>
                      </div>
                      {reff.length !== 1 && (
                        <a
                          href={() => false}
                          onClick={() => handleRemoveParentReff(index)}
                          className="px-3.5 justify-center items-center flex ml-3 rounded-lg text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 "
                        >
                          <FiTrash size={18} />
                        </a>
                      )}
                      {reff.length - 1 === index && (
                        <a
                          href={() => false}
                          onClick={() => handleAddParentReff()}
                          className="px-3 justify-center text-primary items-center flex ml-3 border border-primary rounded-lg hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-primary"
                        >
                          <FiPlus size={22} />
                        </a>
                      )}
                    </div>
                    {data.reff.map((reff, indexsub) => {
                      return (
                        <div className="flex flex-row" key={indexsub}>
                          <div className="relative w-full">
                            <div>
                              <input
                                type="text"
                                id="floating_outlined"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                value={reff.subreff}
                                onChange={(e) =>
                                  handleInputChangeSubReff(e, indexsub, index)
                                }
                              />
                              <label
                                htmlFor="floating_outlined"
                                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                              >
                                Subreff
                              </label>
                            </div>
                          </div>
                          <a
                            href={() => false}
                            onClick={() => handleRemoveSubReff(indexsub, index)}
                            className="px-3.5 justify-center items-center text-sm flex ml-3 rounded-lg text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 "
                          >
                            <FiTrash size={18} className="mr-2" />
                            Subreff
                          </a>
                        </div>
                      );
                    })}
                    <a
                      onClick={() => handleAddSubReff(index)}
                      className="flex items-center justify-center text-primary bg-white hover:bg-primary hover:text-white border border-1 border-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
                    >
                      <FiPlus className="inline" />
                      <p className="inline">Subreff</p>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="flex-col">
              {lirik.map((data, index) => {
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
                              handleInputChangeParentLirik(e, index)
                            }
                            defaultValue={"baris_" + (index + 1)}
                            disabled
                          />
                          <label
                            htmlFor="floating_outlined"
                            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                          >
                            Lirik
                          </label>
                        </div>
                      </div>
                      {lirik.length !== 1 && (
                        <a
                          href={() => false}
                          onClick={() => handleRemoveParentLirik(index)}
                          className="px-3.5 justify-center items-center flex ml-3 rounded-lg text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 "
                        >
                          <FiTrash size={18} />
                        </a>
                      )}
                      {lirik.length - 1 === index && (
                        <a
                          onClick={() => handleAddParentLirik()}
                          className="px-3 justify-center text-primary items-center flex ml-3 border border-primary rounded-lg hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-primary"
                        >
                          <FiPlus size={22} />
                        </a>
                      )}
                    </div>
                    {data.lirik.map((lirik, indexsub) => {
                      return (
                        <div className="flex flex-row" key={indexsub}>
                          <div className="relative w-full">
                            <div>
                              <input
                                type="text"
                                id="floating_outlined"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                value={lirik.sublirik}
                                onChange={(e) =>
                                  handleInputChangeSubLirik(e, indexsub, index)
                                }
                              />
                              <label
                                htmlFor="floating_outlined"
                                className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                              >
                                Sublirik
                              </label>
                            </div>
                          </div>
                          <a
                            href={() => false}
                            onClick={() =>
                              handleRemoveSubLirik(indexsub, index)
                            }
                            className="px-3.5 justify-center items-center text-sm flex ml-3 rounded-lg text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-500 "
                          >
                            <FiTrash size={18} className="mr-2" />
                            Sublirik
                          </a>
                        </div>
                      );
                    })}
                    <a
                      onClick={() => handleAddSubLirik(index)}
                      className="flex items-center justify-center text-primary bg-white hover:bg-primary hover:text-white border border-1 border-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
                    >
                      <FiPlus className="inline" />
                      <p className="inline">Sublirik</p>
                    </a>
                  </div>
                );
              })}
            </div>
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
