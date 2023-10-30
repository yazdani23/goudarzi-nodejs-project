const mongoose = require("mongoose")

const User = mongoose.Schema(
    {
      firstName: { type: String, match: /[a-z]/, required: true },
      lastName: { type: String, match: /[a-z]/, required: true },
      email: { type: String, unique: true, required: true },
      password: String,
      role: {
        type: String,
        enum: ["TEACHER", "STUDENT", "EDUCATION_MANAGER", "IT_MANAGER"],
        required:true
      },
    },
    { timestamps: true }
  );


module.exports = mongoose.model("User", User)


