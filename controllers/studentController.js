const bcrypt = require("bcrypt")
const Student = require("../models/Student");
const saltRoundd = 10;

async function getAllStudents(req, res) {

    try {
        const studentsList = await Student.find({})
        return res.status(200).send(studentsList)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}
const createStudent = async (req, res) => {

    try {
        const {grad, firstName, lastName, email, password,role } = req.body
        
        const student = await Student.findOne({ email });
        if (student) {
            return res.status(400).json({ error: 'ایمیل قبلا استفاده شده است' });
          }

        const hashPassword = await bcrypt.hash(password, saltRoundd)
      
        const newStudent = Student({
            IdStd: 1000003345,
            grad,
            firstName,
            lastName,
            email,
            password: hashPassword,
            role
        })
        await newStudent.save();
        return res.send({ message: "Student created" })

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: "Internal Sever Error" })
    }
}

module.exports = { createStudent,getAllStudents }