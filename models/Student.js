const mongoose = require("mongoose");
const User = require("./User");

const  Student= mongoose.Schema({
    IdStd: { type: Number, match: /[0-9]{10}/, required:true },
    grad: { type: String, match: /[a-zA-Z]/, required:true },
    GPA: { type: Number , default:null},
}, { timestamps: true })




module.exports= User.discriminator("Student", Student);
