const bcrypt = require("bcrypt")
const Teacher = require("../models/Teacher");
const saltRoundd = 10;

async function getAllTeachers(req, res) {

    try {
        const teachersList = await Teacher.find({})
        return res.status(200).send(teachersList)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}
const createTeacher = async (req, res) => {

    try {
        const {level, firstName, lastName, email, password,role } = req.body
        
        const teacher = await Teacher.findOne({ email });
        if (teacher) {
            return res.status(400).json({ error: 'ایمیل قبلا استفاده شده است' });
          }

        const hashPassword = await bcrypt.hash(password, saltRoundd)
      
        const newTeacher = Teacher({
            IdTeach: 9876543210,
            level,
            firstName,
            lastName,
            email,
            password: hashPassword,
            role
        })
        await newTeacher.save();
        return res.send({ message: "Teacher created" })

    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: "Internal Sever Error" })
    }
}

module.exports = { createTeacher,getAllTeachers }