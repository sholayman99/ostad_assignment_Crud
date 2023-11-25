import { useEffect, useState } from "react";
import { readStudentData, removeStudentData } from "../apiRequest/apiRequest";
import toast, { Toaster } from "react-hot-toast";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";


const StudentTable = () => {
    const [data, setData] = useState([]);
  const [refresh , setRefresh] = useState(0)

  useEffect(() => {
    (async () => {
      let res = await readStudentData();

      if (res["message"] === "Success") {
        setData(res["data"]);
        console.log(res["data"]);
      }
    })();
  }, [refresh]);

  const handleDelete = async (id) => {
    let res = await removeStudentData(id);
    if (res) {
        toast.success("Delete Success..")
        setRefresh(refresh+1);
    }else{
        toast.error("Request Failed..")
    }
  };
    return (
        <main className="container">
            <div className="row">
               <div className="col-md-12">
               <Table responsive >
          {/* head */}
          <thead>
            <tr>
              <th>FirstN</th>
              <th>LastN</th>
              <th>Gender</th>
              <th>DateOfBirth</th>
              <th>Nationality</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Admission Date</th>
              <th>Courses</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td> {d["firstName"]} </td>
                <td> {d["lastName"]} </td>
                <td> {d["gender"]} </td>
                <td> {d["dateOfBirth"]} </td>
                <td> {d['nationality']} </td>
                <td> {d['address']} </td>
                <td> {d["email"]} </td>
                <td> {d["phone"]} </td>
                <td> {d['admissionDate']} </td>
                <td> {d["courses"]} </td>
                <td>
                  <button
                    onClick={() => handleDelete(d["_id"])}
                    className="btn btn-danger"> Delete </button>
                </td>
                <td> <Link to={"/register?id=" + d['_id']} className="btn btn-primary"> Edit </Link></td>
              </tr>
            ))}
          </tbody>
          </Table>
               </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </main>
    );
};

export default StudentTable;