import axios from "axios";
import React, { useState } from "react";
import { FiTrash, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function AddQasidah() {
  const [title, setTitle] = useState("");
  const [title_arabic, setTitleArabic] = useState("");
  const [version, setVersion] = useState("");
  const [tipe, setTipe] = useState("Arabic");
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textreff = reff.map(({ parent, reff }) => ({parent,reff}));
    const textlirik = lirik.map(({ parent, lirik }) => ({ parent, lirik }));
    try {
      await axios.post("https://myqasidah.up.railway.app/qasidahs", {
        title,
        title_arabic,
        version,
        tipe,
        textreff,
        textlirik,
      })
      navigate("/qasidah");
    } catch (e) {
      console.log(e);
    }
  };
  //add Dynamical Multiple Input parent Reff
  const handleAddParentReff = () => {
    setReff([
      ...reff,
      {
        parent: "baris_"+(reff.length+1),
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
        parent: "baris_"+(lirik.length+1),
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
    <div className="container my-3">
      <div className="row">
        <div className="col-md-12">
          <h2 style={{ color: "#09755E" }}>Tambah Qasidah</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href={`./`} style={{ color: "#09755E" , textDecoration:'none'}}>
                  Qasidah
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tambah Qasidah
              </li>
            </ol>
          </nav>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                value={title}
                className="form-control"
                id="title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Title Arabic</label>
              <input
                type="text"
                value={title_arabic}
                className="form-control"
                id="title_arabic"
                name="title_arabic"
                onChange={(e) => setTitleArabic(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Version</label>
              <input
                type="text"
                value={version}
                className="form-control"
                id="version"
                name="version"
                onChange={(e) => setVersion(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Tipe</label>
              <select
                className="form-select"
                value={tipe}
                onChange={(e) => setTipe(e.target.value)}
              >
                <option valuename="Arabic">Arabic</option>
                <option valuename="Indonesia">Indonesia</option>
              </select>
            </div>
            <div className="row">
              <div className="col-md-6">
                {reff.map((data, index) => {
                  return (
                    <div className="mb-3" key={index}>
                      <label className="form-label">Reff</label>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-8 col-md-9 mb-3">
                              <input
                                type="text"
                                // value={data.parent}
                                className="form-control"
                                id="reff"
                                name="reff"
                                onChange={(e) =>
                                  handleInputChangeParentReff(e, index)
                                }
                                defaultValue={"baris_" + (index + 1)}
                                disabled
                              />
                            </div>
                            {/* {index !== 0 ? (
                                <a
                                className="btn btn-danger"
                                onClick={() => handleRemoveParentReff(index)}
                                >
                                <FiTrash />
                                </a>
                                ) : (
                                  <a
                                  className="btn btn-success"
                                  onClick={() => handleAddParentReff()}
                                  >
                                  <FiPlus />
                                  </a>
                                )} */}
                            {reff.length !== 1 && (
                              <div className="col-2 col-md-1">
                                <button
                                  className="btn btn-danger"
                                  onClick={() => handleRemoveParentReff(index)}
                                >
                                  <FiTrash />
                                </button>
                              </div>
                            )}
                            {reff.length - 1 === index && (
                              <div className="col-1">
                                <button
                                  className="btn btn-success"
                                  onClick={() => handleAddParentReff()}
                                >
                                  <FiPlus />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="row">
                            {data.reff.map((reff, indexsub) => {
                              return (
                                <div className="col-md-12 mb-3" key={indexsub}>
                                  <div className="row">
                                    <div className="col-10">
                                      <input
                                        className="form-control"
                                        value={reff.subreff}
                                        onChange={(e) =>
                                          handleInputChangeSubReff(
                                            e,
                                            indexsub,
                                            index
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="col-2">
                                      <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                          handleRemoveSubReff(indexsub, index)
                                        }
                                      >
                                        <FiTrash />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            <div className="col-auto">
                              <button
                                className="btn btn-primary"
                                onClick={() => handleAddSubReff(index)}
                              >
                                <FiPlus />
                                Sub Reff
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-md-6">
                {lirik.map((data, index) => {
                  return (
                    <div className="mb-3" key={index}>
                      <label className="form-label">Lirik</label>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-8 col-md-9 mb-3">
                              <input
                                type="text"
                                // value={data.parent}
                                className="form-control"
                                id="lirik"
                                name="lirik"
                                onChange={(e) =>
                                  handleInputChangeParentLirik(e, index)
                                }
                                defaultValue={"baris_" + (index + 1)}
                                disabled
                              />
                            </div>
                            {/* {index !== 0 ? (
                                <a
                                className="btn btn-danger"
                                onClick={() => handleRemoveParentLirik(index)}
                                >
                                <FiTrash />
                                </a>
                                ) : (
                                <a
                                  className="btn btn-success"
                                  onClick={() => handleAddParentLirik()}
                                  >
                                  <FiPlus />
                                  </a>
                                )} */}
                            {lirik.length !== 1 && (
                              <div className=" col-2 col-md-1">
                                <button
                                  className="btn btn-danger"
                                  onClick={() => handleRemoveParentLirik(index)}
                                >
                                  <FiTrash />
                                </button>
                              </div>
                            )}
                            {lirik.length - 1 === index && (
                              <div className="col-1">
                                <button
                                  className="btn btn-success"
                                  onClick={() => handleAddParentLirik()}
                                >
                                  <FiPlus />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="row">
                            {data.lirik.map((lirik, indexsub) => {
                              return (
                                <div className="col-md-12 mb-3" key={indexsub}>
                                  <div className="row">
                                    <div className="col-10">
                                      <input
                                        className="form-control"
                                        value={lirik.sublirik}
                                        onChange={(e) =>
                                          handleInputChangeSubLirik(
                                            e,
                                            indexsub,
                                            index
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="col-2">
                                      <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                          handleRemoveSubLirik(indexsub, index)
                                        }
                                      >
                                        <FiTrash />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            <div className="col-auto">
                              <button
                                className="btn btn-primary"
                                onClick={() => handleAddSubLirik(index)}
                              >
                                <FiPlus />
                                Sub Lirik
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
