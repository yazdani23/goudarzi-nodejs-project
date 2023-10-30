const express= require("express");
const router = require("./routes/v1/indexRouter");
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
app.use(router)



mongoose.connect("mongodb://localhost:27017/goudarzi_second_db")
.then(()=> console.log("db connected!"))
.catch((error)=> console.error("connection DB faild!", error.message))

// env
const port=5000;
app.listen(port, ()=>{
    console.log(`server is running on port:${port}`);
})

