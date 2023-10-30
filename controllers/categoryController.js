const { default: slugify } = require("slugify");
const Category = require("../models/Category");

async function getAllCategoies(req, res) {

    try {
        const categoriesList = await Category.find({})
        return res.status(200).send(categoriesList)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

const createCategory = async (req, res) => {

    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).send({ message: "name is required" })
        }
        const newCategory = new Category({ name });
        const slug = slugify(name, { lower: true, replacement: '_' });
        const cat = await Category.findOne({ slug })
        console.log(cat);
        if (cat) {
            return res.status(500).send({ message: "cat already exist" })
        }
        const savedCategory = await newCategory.save();
        return res.status(200).send(savedCategory)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

module.exports = { getAllCategoies, createCategory }