const Category = require("../models/Category");
const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
    console.log(req.query)

    const products = await Product.find({})
    return res.send(products);
}
const getProducts = async (req, res) => {

    try {
        const { category } = req.params
        if (category) {
            const products = await Product.find({ slug: category })
            return res.send(products);
        }
        return res.send({message:"..."});
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

const createProduct = async (req, res) => {
    try {

        const { title, price, description, image, categoryId } = req.body

        if (title && price?.value && description && image && categoryId) {

            const cat = await Category.findOne({ _id: categoryId })

            if (!cat) {
                return res.status(400).send({ message: "category is invalid" })
            }
            const product = await Product.create({
                title, price, description, image, categoryId
            })

            return res.status(201).send({ newPoduct: product, message: "product created!" })
        }
        return res.status(400).send({ message: "fill the requiured field!" })


    } catch (error) {
        return res.status(500).send({ message: "product failed!", messageError: error.message })
    }

}


const singleProduct = async (req, res) => {

    const { slug } = req.params
    const product = await Product.findOne({ slug })
    return res.status(200).send(product)
}

module.exports = { getAllProducts, singleProduct, createProduct, getProducts }