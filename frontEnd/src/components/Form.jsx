import toast, { Toaster } from "react-hot-toast";
import { createStudent, findById, updateStudentData } from "../apiRequest/apiRequest";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FullScreenLoader from "./FullScreenLoader";


const Form = () => {
    const [updatedId,setUpdatedId] = useState(null);
    const [loader,setLoader] = useState("d-none");
    const navigate = useNavigate()
    const [formData, setFormData] = useState({firstName: "",lastName: "",gender: "", dateOfBirth: "",
      nationality: "",address: "",email: "",phone: "",admissionDate: "",courses: ""});


      useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        setUpdatedId(id);

        (async()=>{
              if(id !== null){
               await fillForm(id);
              }
        })()
         
      },[])

 const fillForm = async( id) =>{
       let res = await findById(id);
       setFormData({firstName:res['firstName'],lastName: res['lastName'],gender: res['gender'], 
       dateOfBirth: res['dateOfBirth'],nationality: res['nationality'],address: res['address'],
       email: res['email'],phone: res['phone'],admissionDate: res['admissionDate'],
       courses: res['courses']})
 }    
  
    const saveData =async () => {
     console.log(updatedId)
     if(updatedId == null){
        setLoader("");
        let res = await createStudent(formData);
        setLoader("d-none");
        if(res){
            toast.success("Create Data Successfully");
            navigate("/");
         
        }else{
            toast.error("Create Request Failed..")
        }
     }else{
        setLoader("");
        let res = await updateStudentData(updatedId,formData);
        setLoader("d-none");
        if(res){
            toast.success("Update Data Successfully");
            navigate("/");
         
        }else{
            toast.error("Update Request Failed..")
        }
     }

    };
  
    const inputOnChange = (key, value) => {
      setFormData((formData) => ({
        ...formData,
        [key]: value,
      }));
    };
    return (
       <>
        <main className="container my-3">
            <div className="row">
                 <div className="p-2 col-md-4">
                 <label  className="form-label">FirstName</label>
                 <input value={formData.firstName} type="text"  onChange={(e) => inputOnChange("firstName" , e.target.value)} placeholder="Your First Name" className="form-control" />
                 </div>
                 <div className="p-2 col-md-4">
                 <label  className="form-label">LastName</label>
                 <input value={formData.lastName} type="text"  onChange={(e) => inputOnChange("lastName" , e.target.value)} placeholder="Your Last Name" className="form-control" />
                 </div>
                 <div className="p-2 col-md-4">
                 <label  className="form-label">Gender</label>
                 <input value={formData.gender} type="text"  onChange={(e) => inputOnChange("gender" , e.target.value)} placeholder="Your Gender" className="form-control" />
                 </div>
                 <div className="p-2 col-md-4">
                 <label  className="form-label">DateOfBirth</label>
                 <input value={formData.dateOfBirth} type="text"  onChange={(e) => inputOnChange("dateOfBirth" , e.target.value)} placeholder="Your date Of Birth" className="form-control" />
                 </div>
                 <div className="p-2 col-md-4">
                 <label  className="form-label"> Nationality</label>
                 <input value={formData.nationality} type="text"  onChange={(e) => inputOnChange("nationality" , e.target.value)} placeholder="Your  Nationality" className="form-control" />
                 </div>
                 <div className="p-2 col-md-4">
                 <label  className="form-label">Address</label>
                 <input value={formData.address} type="text"  onChange={(e) => inputOnChange("address" , e.target.value)} placeholder="Your Address" className="form-control" />
                 </div>
                 <div className="p-2 col-md-4">
                 <label  className="form-label">Email</label>
                 <input value={formData.email} type="text"  onChange={(e) => inputOnChange("email" , e.target.value)} placeholder="Your Email" className="form-control" />
                 </div>
                 <div className="p-2 col-md-4">
                 <label  className="form-label">Phone</label>
                 <input value={formData.phone} type="text"  onChange={(e) => inputOnChange("phone" , e.target.value)} placeholder="Your Phone" className="form-control" />
                 </div>
                 <div className="p-2 col-md-4">
                 <label  className="form-label"> AdmissionDate</label>
                 <input value={formData.admissionDate} type="text"  onChange={(e) => inputOnChange("admissionDate" , e.target.value)} placeholder="Your Admission Date" className="form-control" />
                 </div>
                 <div className="p-2 col-md-4">
                 <label  className="form-label">Courses</label>
                 <input value={formData.courses} type="text"  onChange={(e) => inputOnChange("courses" , e.target.value)} placeholder="Your Courses" className="form-control" />
                 </div>
                </div>
                <div className="row">
                <div className="p-2 my-2 mx-auto col-md-4">
                 <button onClick={() => saveData()} className="btn w-100 btn-success">Save</button>
                 </div>
                </div>
            
            <Toaster position="top-center" />
        </main>
        <FullScreenLoader visibility={loader} />
       </>
    );
};

export default Form;