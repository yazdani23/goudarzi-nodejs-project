const mongoose = require("mongoose")
// const slug = require('mongoose-slug-generator')
// mongoose.plugin(slug); 

// const Category = mongoose.Schema({
//    name:{type:String},
//    slug: {type:String, slug: 'name', unique: true}
// })


const slugify = require('slugify');

const Category = mongoose.Schema({
   name: { type: String },
   slug: { type: String , uniqe:true}
});

Category.pre('save', function(next) {
   this.slug = slugify(this.name, { lower: true , replacement: '_'});
   next();
});

module.exports = mongoose.model("Category", Category)