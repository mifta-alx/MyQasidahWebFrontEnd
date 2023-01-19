import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DetailQasidah() {
  const [title, setTitle] = useState("");
  const [title_arabic, setTitleArabic] = useState("");
  const [version, setVersion] = useState("");
  const [reff, setReff] = useState([]);
  const [lirik, setLirik] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getQasidahById = async () => {
      const res = await axios.get(`https://myqasidah.up.railway.app/qasidahs/${id}`);
      setTitle(res.data.title);
      setTitleArabic(res.data.title_arabic);
      setVersion(res.data.version);
      setReff(res.data.textreff);
      setLirik(res.data.textlirik);
    };
    getQasidahById();
  }, [id]);
  return (
    <div className="container mt-3">
      <div className="col-md-12">
        <h4 style={{ color: "#09755E" }}>{title}</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href={`../`} style={{ color: "#09755E" , textDecoration:'none' }}>
                Qasidah
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Detail Qasidah
            </li>
          </ol>
        </nav>
        <div className="d-flex justify-content-center">
          <div className="col-sm-12 col-xl-8">
            <div className="d-flex justify-content-center">
              <h1 className="">{title_arabic}</h1>
            </div>
            <div className="d-flex justify-content-center">
              <small>{version}</small>
            </div>
            <div className="my-3">
              {reff.map((data, index) => {
                return (
                  <div key={index} className="row" style={{flexWrap:'wrap-reverse'}}>
                    {data.reff.slice(0).reverse().map((subr, indexsub) => {
                      const styleDot =
                        subr.subreff === "۰۞۰"
                          ? "col-2 d-flex justify-content-center"
                          : "col-5 d-flex justify-content-center";
                          if(data.reff.length > 1){
                            return (
                              <div
                                className={styleDot}
                                style={{
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                key={indexsub}
                              >
                                <p className="fs-3">
                                  {subr.subreff}
                                </p>
                              </div>
                            );
                          }else{
                            return(
                              <div
                                className="col-md-12 d-flex justify-content-center"
                                style={{
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                key={indexsub}
                              >
                                <p className="fs-3">
                                  {subr.subreff}
                                </p>
                              </div>

                            )
                          }
                    })}
                  </div>
                );
              })}
            </div>
            {
              reff.length !== 0 && <div style={{ height: 1, backgroundColor: "black" }}/>
            }
            <div className="my-3">
              {lirik.map((data, index) => {
                return (
                  <div key={index} className="row" style={{flexWrap:'wrap-reverse'}}>
                    {data.lirik.slice(0).reverse().map((subl, indexsub) => {
                      const styleDot =
                        subl.sublirik === "۰۞۰"
                          ? "col-2 d-flex justify-content-center"
                          : "col-5 d-flex justify-content-center";
                          if(data.lirik.length > 1){
                            return (
                              <div
                                className={styleDot}
                                style={{
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                key={indexsub}
                              >
                                <p className="fs-3">
                                  {subl.sublirik}
                                </p>
                              </div>
                            );
                          }else{
                            return(
                              <div
                                className="col-md-12 d-flex justify-content-center"
                                style={{
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                                key={indexsub}
                              >
                                <p className="fs-3">
                                  {subl.sublirik}
                                </p>
                              </div>

                            )
                          }
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailQasidah;
