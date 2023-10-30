const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/goudarzi_db")
.then(()=> console.log("db connected!"))
.catch((error)=> console.error("connection DB faild!", error.message))
