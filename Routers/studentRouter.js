import express from "express"
import Student from "../models/student.js"
import {getStudents,  createStudent } from "./controllers/studentController.js"


const studentRouter =express.Router() // created the router



//If there is a get request
studentRouter.get("/",getStudents);


//if there is a post request
studentRouter.post("/",createStudent);
// connect to the main road
export default studentRouter;
