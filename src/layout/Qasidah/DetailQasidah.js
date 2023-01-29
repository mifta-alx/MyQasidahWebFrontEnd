import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";

function DetailQasidah() {
  //data
  const [title, setTitle] = useState("");
  const [title_arabic, setTitleArabic] = useState("");
  const [version, setVersion] = useState("");
  const [reff, setReff] = useState([]);
  const [lirik, setLirik] = useState([]);
  const { id } = useParams();
  //
  //animate css 
  const [expand, setExpand] = useState(false);
  const [modal, setModal] = useState(false);
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  //
  //alert
  const location = useLocation();
  const [visible, setVisible] = useState(false)
  //
  const navigate = useNavigate();

  useEffect(() => {
    const getQasidahById = async () => {
      const res = await axios.get(`http://localhost:3001/qasidahs/${id}`);
      setTitle(res.data.title);
      setTitleArabic(res.data.title_arabic);
      setVersion(res.data.version);
      setReff(res.data.textreff);
      setLirik(res.data.textlirik);
    };
    getQasidahById();

    //alert
    setVisible(location?.state?.status == 201)
    const timeId = setTimeout(() => {
      setVisible(false)
    }, 2000)
    return () => {
      clearTimeout(timeId)
    }
    //
  }, [id]);

  window.history.replaceState({}, document.title)

  const deleteQasidah = async () => {
    try {
      const res = await axios.delete(`http://localhost:3001/qasidahs/${id}`);
      navigate("/qasidah", { state: {status : res.status, message : res.data.message}});
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className={`px-4 md:px-[100px] pb-6`}>
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
              onClick={()=> setVisible(false)}
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
        )
      }
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
                  {title}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="w-full md:px-12 md:py-6 mt-4 bg-white border border-gray-200 rounded-lg shadow px-2 py-6">
          <div className="flex flex-col justify-center items-center">
            <div className="justify-center flex flex-col items-center mb-6">
              <p className="font-pjs-bold text-xl md:text-3xl">
                {title_arabic}
              </p>
              <p className="text-sm font-pjs-medium mt-2 md:mt-4">{version}</p>
            </div>
            {reff.map((data, index) => {
              return (
                <div
                  className="flex flex-row flex-wrap-reverse w-full mt-4"
                  key={index}
                >
                  {data.reff
                    .slice(0)
                    .reverse()
                    .map((subr, indexsub) => {
                      const styleDot =
                        subr.subreff === "۰۞۰"
                          ? "flex justify-center items-center basis-2/12"
                          : "flex justify-center items-center basis-5/12";
                      if (data.reff.length > 1) {
                        return (
                          <div className={styleDot} key={indexsub}>
                            <p className="text-sm sm:text-base font-pjs-medium md:text-3xl">
                              {subr.subreff}
                            </p>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                </div>
              );
            })}
            {reff.length !== 0 && (
              <div className="h-[2px] bg-gray-100 w-full flex px-4 my-6" />
            )}
            {lirik.map((data, index) => {
              return (
                <div
                  className="flex flex-row flex-wrap-reverse w-full mt-4"
                  key={index}
                >
                  {data.lirik
                    .slice(0)
                    .reverse()
                    .map((subl, indexsub) => {
                      const styleDot =
                        subl.sublirik === "۰۞۰"
                          ? "flex justify-center items-center basis-2/12"
                          : "flex justify-center items-center basis-5/12";
                      if (data.lirik.length > 1) {
                        return (
                          <div className={styleDot} key={indexsub}>
                            <p className="text-sm sm:text-base font-pjs-medium md:text-3xl">
                              {subl.sublirik}
                            </p>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div data-dial-init className="fixed right-6 bottom-6 group" 
          onMouseEnter={() => setExpand(true)}
          onMouseLeave={() => setExpand(false)}>
        <div
          id="speed-dial-menu-square"
          className={`flex-col items-center mb-4 space-y-2 ${
            expand ? "flex" : "hidden"
          }`}
        >
          <Link
            to={`../qasidah/edit/${id}`}
            data-tooltip-target="tooltip-edit"
            data-tooltip-placement="left"
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
            className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-primary bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none"
          >
            <FiEdit size={20} />
            <span className="sr-only">Edit</span>
          </Link>
          <div
            id="tooltip-edit"
            role="tooltip"
            className={`absolute z-10 inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip ${hover ? 'visible opacity-100 right-20 top-0 transition-transform translate-x-4' : 'invisible opacity-0'}`}
          >
            Edit
            <div className={`tooltip-arrow absolute z-10 w-2 h-2 bg-gray-900 ${hover ? 'visible opacity-100 -right-1 top-4 rotate-45' : 'invisible opacity-0'}`} data-popper-arrow></div>
          </div>
          <button
            type="button"
            data-tooltip-target="tooltip-delete"
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            data-tooltip-placement="left"
            onClick={() => setModal(true)}
            onMouseEnter={()=> setHover2(true)}
            onMouseLeave={()=> setHover2(false)}
            className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-primary bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none"
          >
            <FiTrash2 size={20} />
            <span className="sr-only">Delete</span>
          </button>
          <div
            id="tooltip-delete"
            role="tooltip"
            className={`absolute z-10 inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip ${hover2 ? 'visible opacity-100 right-20 top-[60px] transition-transform translate-x-4' : 'invisible opacity-0'}`}
            data-popper-placement="left"
          >
            Delete
            <div className={`tooltip-arrow absolute z-10 w-2 h-2 bg-gray-900 ${hover2 ? 'visible opacity-100 -right-1 top-4 rotate-45' : 'invisible opacity-0'}`} data-popper-arrow></div>
          </div>
        </div>
        <button
          type="button"
          data-dial-toggle="speed-dial-menu-square"
          aria-controls="speed-dial-menu-square"
          aria-expanded="false"
          className="flex items-center justify-center text-white bg-primary rounded-lg w-14 h-14 hover:bg-primary-700"
          onClick={() => setExpand(!expand)}
        >
          <svg
            aria-hidden="true"
            className={`w-8 h-8 transition-transform ${
              expand
                ? "group-hover:rotate-45"
                : "group-hover:rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <span className="sr-only">Open actions menu</span>
        </button>
      </div>
      {/* modal delete */}
      <div
        id="popup-modal"
        tabIndex="-1"
        className={`fixed top-60 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full justify-center items-center ${
          modal ? "flex" : "hidden"
        }`}
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow ">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="popup-modal"
              onClick={() => setModal(false)}
            >
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
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Apakah anda yakin akan menghapus qasidah ini?
              </h3>
              <button
                onClick={() => deleteQasidah()}
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Ya, Saya yakin
              </button>
              <button
                data-modal-hide="popup-modal"
                onClick={() => setModal(false)}
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
              >
                Tidak, batal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        modal-backdrop=""
        className={`bg-gray-900 bg-opacity-50 inset-0 z-40 fixed ${
          modal ? "flex" : "hidden"
        }`}
      />
    </>
  );
}

export default DetailQasidah;
