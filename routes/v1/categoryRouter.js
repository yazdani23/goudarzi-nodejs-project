const express= require("express")
const { getAllCategoies, createCategory } = require("../../controllers/categoryController")
const { checkAdminMiddleware, checkTokenMiddleware } = require("../../middlewares/authMiddleware")
const categoryRouter= express.Router()

categoryRouter.get("/categories", getAllCategoies)
categoryRouter.post("/categories",checkTokenMiddleware, checkAdminMiddleware, createCategory)


module.exports= categoryRouter