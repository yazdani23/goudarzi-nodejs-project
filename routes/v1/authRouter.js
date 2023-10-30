const express = require("express")
const { singnup, login } = require("../../controllers/authController")
const validateMiddelware = require("../../middlewares/validatorMiddlewar")
const { userValidateSchema } = require("../../utils/validation")
const authRouter = express.Router()


authRouter.get("/login", login)
authRouter.post("/login", login)
authRouter.post("/signup",validateMiddelware(userValidateSchema), singnup)


module.exports= authRouter