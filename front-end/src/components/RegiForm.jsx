import { useState } from "react";
import { createStudent } from "../apiRequest/apiRequest";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegiForm = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    email: "",
    phone: "",
    admissionDate: "",
    courses: "",
  });

  const saveData =async () => {
    console.log(formData);
    let res = await createStudent(formData);
    if(res){
        toast.success("Save Data Successfully");
        navigate("/");
    }else{
        toast.error("Request Failed..")
    }
  };

  const inputOnChange = (key, value) => {
    setFormData((formData) => ({
      ...formData,
      [key]: value,
    }));
  };

  return (
    <main className="flex flex-col items-center min-h-screen justify-center">
            <h2 className="font-bold lg:text-2xl text-xl md:text-2xl text-black uppercase font-[sans-serif]">Your Registration Form</h2>
      <div className="card  w-full  bg-base-100">
        <div className="card-body">
          {/* input--filed */}
          <div className=" grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <input
                type="text"
                value={formData.firstName}
                placeholder=" Your FirstName"
                className="input input-bordered"
                required
                onChange={(e) => inputOnChange("firstName" , e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                value={formData.lastName}
                placeholder=" Your LastName"
                className="input input-bordered"
                required
                onChange={(e) => inputOnChange("lastName" , e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                value={formData.gender}
                placeholder=" Your Gender"
                className="input input-bordered"
                required
                onChange={(e) => inputOnChange("gender" , e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                value={formData.dateOfBirth}
                placeholder="Your Date Of Birth"
                className="input input-bordered"
                required
                onChange={(e) => inputOnChange("dateOfBirth" , e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                value={formData.nationality}
                placeholder="Your Nationality"
                className="input input-bordered"
                required
                onChange={(e) => inputOnChange("nationality" , e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                value={formData.address}
                placeholder="Your Address"
                className="input input-bordered"
                required
                onChange={(e) => inputOnChange("address" , e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                value={formData.email}
                placeholder="Your Email"
                className="input input-bordered"
                required
                onChange={(e) => inputOnChange("email" , e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                value={formData.phone}
                placeholder="Your Phone"
                className="input input-bordered"
                required
                onChange={(e) => inputOnChange("phone" , e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                value={formData.admissionDate}
                placeholder="Your Admission Date"
                className="input input-bordered"
                required
                onChange={(e) => inputOnChange("admissionDate" , e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                value={formData.courses}
                placeholder="Your Courses"
                className="input input-bordered"
                required
                onChange={(e) => inputOnChange("courses" , e.target.value)}
              />
            </div>
          </div>

          {/* submit--btn */}
          <div className="form-control w-[40%] mx-auto mt-6">
            <button onClick={() => saveData()} className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};

export default RegiForm;
