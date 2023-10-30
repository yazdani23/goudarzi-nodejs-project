const express= require("express")
const { createTeacher, getAllTeachers } = require("../../controllers/teacherController")
const teacherRouter= express.Router()


teacherRouter.get("/api/v1/teacher",getAllTeachers)
teacherRouter.post("/api/v1/teacher",createTeacher)


module.exports= teacherRouter