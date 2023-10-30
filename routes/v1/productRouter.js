const express= require("express")
const { getAllProducts, singleProduct, createProduct, getProducts } = require("../../controllers/productController")
const { checkTokenMiddleware, checkAdminMiddleware } = require("../../middlewares/authMiddleware")
const productRouter= express.Router()

productRouter.get("/products", getAllProducts )
productRouter.get("/products/:category", getProducts )
productRouter.get("/products/:slug", singleProduct )

productRouter.post("/products", checkTokenMiddleware, checkAdminMiddleware , createProduct )

module.exports = productRouter