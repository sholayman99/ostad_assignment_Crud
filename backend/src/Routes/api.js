
/**
 * Author: Md Sholayman
 * Description: This is the file where all routing is implemeting.
 * Date : 24 November,2023.
 */


const express = require('express');
const router = express.Router();

//importing controller function for all the routing.
const StudentContoller = require("../Controllers/StudentContoller");

router.post("/create" , StudentContoller.CreateStudent);
router.get("/read" , StudentContoller.ReadStudentData);
router.put("/update/:id" , StudentContoller.UpdateStudentData);
router.delete("/remove/:id" , StudentContoller.RemoveStudentData);
router.get("/find/:id" , StudentContoller.FindStudentData) ;




module.exports = router ;