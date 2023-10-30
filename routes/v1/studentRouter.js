const express= require("express")
const { createStudent, getAllStudents } = require("../../controllers/studentController")
const studentRouter= express.Router()


studentRouter.get("/api/v1/student",getAllStudents)
studentRouter.post("/api/v1/student",createStudent)


module.exports= studentRouter