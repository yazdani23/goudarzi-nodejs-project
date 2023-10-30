const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const { ACCEPTSTATUS, PROCESSINGSTATUS } = require("../utils/constans")


const getAllOrders = async (req, res) => {

    const orders = await Order.find({})
    return res.send(orders);
}
const getOrders = async (req, res) => {

    try {
        const { category } = req.params
        if (category) {
            const orders = await Order.find({ slug: category })
            return res.send(orders);
        }
        return res.send({ message: "..." });
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

const createOrder = async (req, res) => {
    try {

        const { productsList } = req.body
        const userId = req.userId



        // const productIds = productsList.map(item => item.id);

        // const productPrices = await Product.aggregate([
        //     { $match: { _id: { $in: productIds } } },
        //     {
        //         $group: {
        //             _id: null,
        //             totalPrice: {
        //                 $sum:
        //                 {
        //                     $multiply: ["$price.value",
        //                         {
        //                             $arrayElemAt:
        //                                 [{
        //                                     $filter: {
        //                                         input: productsList, as: "item",
        //                                         cond: { $eq: ["$$item.id", "$_id"] }
        //                                     }
        //                                 }, 0].qty
        //                         }
        //                     ]
        //                 }
        //             }
        //         }
        //     }
        // ]);

        // const totalPrice = productPrices.length > 0 ? productPrices[0].totalPrice : 0;



        if (!productsList || productsList.length <= 0) {
            return res.status(400).send({ message: "fill the requiured field!" })
        }

        const user = await User.findOne({ _id: userId })

        if (!user) {
            return res.status(400).send({ message: "User not found" })
        }

        let totalPrice = 0;

        productsList.map(async (item) => {

            const product = await Product.findOne({ _id: item.id })
            totalPrice += product.price.value * item.qty
        })
        const order = await Order.create({
            productsList,
            totalPrice,
            userId,
            status: PROCESSINGSTATUS
        })

        return res.status(201).send({ newOrder: order, message: "Order created!" })



    } catch (error) {
        return res.status(500).send({ message: "Order failed!", messageError: error.message })
    }

}

const confirmOrder = async (req, res) => {
    try {
        const { id } = req.params
        const { status } = req.body
        const updatedOrder = await Order.findOneAndUpdate(
            { _id: id },
            {
                status: status
            },
            {
                new: true
            }
        )
        if (!updatedOrder) {
            return res.status(404).send({ message: "Order Not Found" })
        }


        return res.status(200).send({ order: updatedOrder, message: "Order updated!" })

    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" });
    }

}

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params
        const { status, productsList } = req.body
        if (!status || !productsList || productsList.length <= 0) {
            return res.status(400).send({ message: "fill the requiured field!" })
        }
        let totalPrice = 0;

        for (const item of productsList) {
            const product = await Product.findOne({ _id: item.id });
            totalPrice += product.price.value * item.qty;
        }

        const updatedOrder = await Order.findOneAndUpdate(
            { _id: id },
            {
                status,
                productsList,
                totalPrice
            },
            {
                new: true
            }
        )

        if (!updatedOrder) {
            return res.status(404).send({ message: "Order Not Found" })
        }


        return res.status(200).send({ order: updatedOrder, message: "Order updated!" })

    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" });
    }

}

const singleOrder = async (req, res) => {

    const { slug } = req.params
    const order = await Order.findOne({ slug })
    return res.status(200).send(order)
}

const deleteOrder = async (req, res) => {
    try {
        const id = req.params.id
        const order =await Order.findOneAndDelete({ _id: id })
        if (!order) {
            return res.status(400).send({ message: "id not found!!!" })
        } else {
            return res.status(200).send({ message: "Deleted success" })
        }
   
       
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" });
    }
}

module.exports = { singleOrder, getAllOrders, getOrders, createOrder, confirmOrder, updateOrder, deleteOrder }