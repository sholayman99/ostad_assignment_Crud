import { useEffect, useState } from "react";
import { readStudentData, removeStudentData } from "../apiRequest/apiRequest";
import toast, { Toaster } from "react-hot-toast";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import FullScreenLoader from "./FullScreenLoader";


const StudentTable = () => {
    const [data, setData] = useState([]);
    const [loader,setLoader] = useState("d-none");
  const [refresh , setRefresh] = useState(0)

  useEffect(() => {
    (async () => {
      setLoader("");
      let res = await readStudentData();
      setLoader("d-none");
      if (res["message"] === "Success") {
        setData(res["data"]);
      }
    })();
  }, [refresh]);

  const handleDelete = async (id) => {
    setLoader("");
    let res = await removeStudentData(id);
    setLoader("d-none");
    if (res) {
        toast.success("Delete Success..")
        setRefresh(refresh+1);
    }else{
        toast.error("Request Failed..")
    }
  };
    return (
       <>
        <main className="container">
            <div className="row">
               <div className="col-md-12 px-2">
               <Table responsive >
          {/* head */}
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Gender</th>
              <th>DateOfBirth</th>
              <th>Nationality</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Admission Date</th>
              <th>Courses</th>
              <th>Action</th>
              <th></th>
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
        <FullScreenLoader visibility={loader} />
       </>
    );
};

export default StudentTable;