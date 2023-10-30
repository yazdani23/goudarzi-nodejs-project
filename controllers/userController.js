const User = require("../models/User");

const getAllUsers=async (req, res) =>{
   try {
    const users= await User.find({});
    return res.status(200).send({users});
   } catch (error) {
    console.log(error.message);
    return res.status(500).send({message:"Internal Server Error"});
    
   }
}



module.exports= {getAllUsers}