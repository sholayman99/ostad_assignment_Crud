/**
 * Author: Md Sholayman
 * Description: This is a model file for database.It basically allows us to tell which type of data we are going to use.
 * Date : 24 November,2023.
 */

const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  firstName : {type:String},
  lastName : {type:String},
  gender : {type:String},
  dateOfBirth : {type:String},
  nationality : {type:String},
  address : {type:String},
  email : {type:String},
  phone : {type:String},
  admissionDate : {type:String},
  courses : {type:String}
},
{
    versionKey:false,
    timestumps:true 
});

const StudentModel = mongoose.model("students" , StudentSchema);
module.exports = StudentModel ;


