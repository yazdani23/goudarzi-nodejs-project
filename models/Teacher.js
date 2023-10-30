const mongoose = require("mongoose");
const User = require("./User");

const Teacher = new mongoose.Schema(
    {
      IdTeach: { type: Number, match: /[0-9]{10}/, required: true },
      level: { type: String, match: /[a-z]/, required: true },
    },
    { timestamps: true }
  );
  
// module.exports = mongoose.model("Teacher", Teacher)
module.exports= User.discriminator("Teacher", Teacher);


