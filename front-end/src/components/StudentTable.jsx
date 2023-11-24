/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { readStudentData, removeStudentData } from '../apiRequest/apiRequest';

const StudentTable = () => {

   const [data,setData] = useState([]) ;

   useEffect(() =>{
    (async() =>{

     let res = await readStudentData();
    
     if(res['message'] === "Success"){
      setData(res['data']);
      console.log(res['data'])
     }
    })()

   },[]);


   const handleDelete = async(id) =>{
           let res = await removeStudentData(id) ;
   }


    return (
        <div>
           <h1 className='lg:text-3xl font-bold uppercase text-xl  text-black my-5 p-2'>All Students</h1>
           <div className="overflow-x-auto">
  <table className="table table-xs md:table-sm  lg:table-md">
    {/* head */}
    <thead>
      <tr>
        <th>FirstN</th>
        <th>LastN</th>
        <th>Gender</th>
        <th>DateOfBirth</th>
        {/* <th>Nationality</th>
        <th>Address</th> */}
        <th>Email</th>
        <th>Phone</th>
        {/* <th>Admission Date</th> */}
        <th>Courses</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
    
    {
        data.map((d,i) =><tr key={i}>
        <td> {d['firstName']} </td>
        <td> {d['lastName']} </td>
        <td> {d['gender']} </td>
        <td> {d['dateOfBirth']} </td>
        {/* <td> {d['nationality']} </td>
        <td> {d['address']} </td> */}
        <td> {d['email']} </td>
        <td> {d['phone']} </td>
        {/* <td> {d['admissionDate']} </td> */}
        <td> {d['courses']} </td>
        <td> <button onClick={() => handleDelete(d['_id'])} className="btn btn-xs my-1 lg:btn-sm btn-error">Delete</button> <br/>
        <button className="btn btn-xs lg:btn-sm btn-success">Update</button>
         </td>
        
      </tr>
      )}
     
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default StudentTable;