const { Number } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const slug = require('mongoose-slug-generator')

// mongoose.plugin(slug);

const Product = new mongoose.Schema({
    name: {type : String, require: true},
    price : {type : Number},
    description: {type: String}
},{
    timestamps: true,
});
module.exports = mongoose.model('Product', Product);