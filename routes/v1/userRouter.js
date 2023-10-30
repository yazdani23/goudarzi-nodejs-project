const express = require("express")
const { getAllUsers } = require("../../controllers/userController")
const { checkAdminMiddleware, checkTokenMiddleware } = require("../../middlewares/authMiddleware")
const userRouter = express.Router()

userRouter.get("/users", checkTokenMiddleware, checkAdminMiddleware, getAllUsers)

module.exports= userRouter