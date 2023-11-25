/**
 * Author: Md Sholayman
 * Description: This is the file where crud functions are being hold.
 * Date : 24 November,2023.
 */

//importing database model
const StudentModel = require("../Models/StudentModel");

//creating a new student
exports.CreateStudent = async(req,res) =>{
   try {

    let reqBody = req.body ;
    let result = await StudentModel.create(reqBody);
    res.status(200).json({message:"Success" , data:result});

   } catch (error) {

    res.status(400).json({message:"Fail" , data:error});

}};



//Finding data for all the registered student
exports.ReadStudentData = async(req,res) =>{
    try {
 
     let result = await StudentModel.find({});
     res.status(200).json({message:"Success" , data:result});
 
    } catch (error) {
 
     res.status(400).json({message:"Fail" , data:error});
     
}};



//Updating data of a student by id
exports.UpdateStudentData = async(req,res) =>{
    try {

    let id = req.params.id ;
    let reqBody = req.body ;
    let result = await StudentModel.updateOne({_id:id},reqBody);
    res.status(200).json({message:"Success" , data:result});
 
    } catch (error) {
 
     res.status(400).json({message:"Fail" , data:error});
     
}};


//Deleting data of a student by id
exports.RemoveStudentData = async(req,res) =>{
    try {

    let id = req.params.id ;
    let result = await StudentModel.deleteOne({_id:id});
    res.status(200).json({message:"Success" , data:result});
 
    } catch (error) {
 
     res.status(400).json({message:"Fail" , data:error});
     
}};
 
//Find data of a student by id
exports.FindStudentData = async(req,res) =>{
    try {

    let id = req.params.id ;
    let result = await StudentModel.findOne({_id:id});
    res.status(200).json({message:"Success" , data:result});
 
    } catch (error) {
 
     res.status(400).json({message:"Fail" , data:error});
     
}};
 
 
 



