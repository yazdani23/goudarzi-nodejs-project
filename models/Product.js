const mongoose = require("mongoose")
const slug = require("mongoose-slug-generator")
const Category = require("./Category");
const { default: slugify } = require("slugify");

mongoose.plugin(slug);
const Product = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        // value: { type: Number, required: true },
        // unit: { type: String, default: "$" },
        value: { type: Number, required: true },
        unit: { type: String, default: "$" },

    },
    description: { type: String },
    image: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        res: Category,
        // required: true

    },
    slug: {type:String, unique: true}
})

Product.pre("save", function (next) {
    this.slug= slugify(this.title, {lower:true, replacement:"_"})
    next();
} )

module.exports = mongoose.model("Product", Product)