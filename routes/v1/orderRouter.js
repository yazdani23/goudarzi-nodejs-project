const express= require("express")
const { getAllOrders, singleOrder, createOrder, getOrders, confirmOrder, updateOrder, deleteOrder } = require("../../controllers/orderController")
const { checkTokenMiddleware, checkAdminMiddleware } = require("../../middlewares/authMiddleware")
const orderRouter= express.Router()

orderRouter.get("/orders", getAllOrders )
// orderRouter.get("/orders/", getOrders )
// orderRouter.get("/orders/:slug", singleOrder )

orderRouter.post("/orders", checkTokenMiddleware , createOrder )
orderRouter.patch("/orders/:id", checkTokenMiddleware, checkAdminMiddleware , confirmOrder )
orderRouter.put("/orders/:id", checkTokenMiddleware, checkAdminMiddleware , updateOrder )
orderRouter.delete("/orders/:id", checkTokenMiddleware, checkAdminMiddleware , deleteOrder )

module.exports = orderRouter