const mongoose = require("mongoose");
const Product = require("./Product");
const User = require("./User");
const { orderStatus } = require("../utils/constans");

const Order = mongoose.Schema({
    productsList: [
        {
            id: {
                type: mongoose.Schema.ObjectId,
                ref: Product
            },
            qty: Number
        }
    ],
    totalPrice: Number,
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: User
    },
    status: {
        type: String,
        enum: orderStatus
    }
}, { timestamps: true });


module.exports = mongoose.model("Order", Order)