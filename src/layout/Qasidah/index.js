import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination } from "../../components";
const Qasidah = () => {
  const [data, setData] = useState([]);
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage, setRecords] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(data.length / recordsPerPage);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://myqasidah.up.railway.app/qasidahs"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteQasidah = async (id) => {
    try {
      await axios.delete(`https://myqasidah.up.railway.app/qasidahs/${id}`);
      getUsers();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container mt-3">
      <h2 style={{ color: "#09755E" }}>Daftar Qasidah</h2>
      <div className="card mt-4">
        <div
          className="card-header px-4 d-flex justify-content-between align-items-center"
          style={{ color: "#09755E", fontWeight: "normal" }}
        >
          {/* Data Qasidah */}
          <Link
            to={`add`}
            className="btn text-light btn-sm"
            style={{ backgroundColor: "#09755E" }}
          >
            Tambah
          </Link>
          <div className="form-group">
            <select
              className="form-select"
              value={recordsPerPage}
              onChange={(e) => setRecords(e.target.value)}
            >
              <option valuename={5}>5</option>
              <option valuename={10}>10</option>
              <option valuename={20}>20</option>
              <option valuename={30}>30</option>
              <option valuename={40}>40</option>
              <option valuename={50}>50</option>
            </select>
          </div>
        </div>
        <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Judul Qasidah</th>
                <th scope="col">Arabic</th>
                <th scope="col">Version</th>
                <th scope="col">Tipe</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data
                .slice(indexOfFirstRecord, indexOfLastRecord)
                .map((dataQasidah, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">
                        {recordsPerPage * (currentPage - 1) + index + 1}
                      </th>
                      <td>{dataQasidah.title}</td>
                      <td>{dataQasidah.title_arabic}</td>
                      <td>{dataQasidah.version}</td>
                      <td>{dataQasidah.tipe}</td>
                      <td>
                        <Link
                          to={`detail/${dataQasidah._id}`}
                          className="btn badge rounded-pill hover:text-white text-white mx-2"
                          style={{ backgroundColor: "#09755E" }}
                        >
                          Detail
                        </Link>
                        <Link
                          to={`edit/${dataQasidah._id}`}
                          className="btn badge rounded-pill hover:text-white text-white btn-primary mx-2"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => deleteQasidah(dataQasidah._id)}
                          className="btn badge rounded-pill hover:text-white text-white btn-danger mx-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          </div>
          <div className="p-2 justify-content-between align-items-center d-flex">
            <p>
              Showing {indexOfFirstRecord + 1} to {indexOfLastRecord === recordsPerPage ? indexOfLastRecord : data.length} from {data.length} entries
            </p>
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Qasidah;
