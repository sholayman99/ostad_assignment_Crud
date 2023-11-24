import axios from "axios";
let BASEURL = "http://localhost:5050/api/v1";

export async function createStudent(postBody) {
  try {
    let res = await axios.post(`${BASEURL}/create`, postBody);
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function readStudentData() {
  try {
    let res = await axios.get(`${BASEURL}/read`);

    if (res.status === 200) {
      return res["data"];
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
}



export async function removeStudentData(id){
   
    try {
     
     let res = await axios.delete(`${BASEURL}/remove/${id}`) ;
     
     if(res.status === 200){
        return true
     }else{
        return false;
    }
 
    } catch (error) {
     return false;
    }
 }