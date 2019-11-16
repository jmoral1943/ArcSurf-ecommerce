const mongoose = require("mongoose");
// set variable Schema to equal mongoose schema
const Schema = mongoose.Schema;

const Sizes = new Schema({
  size: {
    type: String,
    trim: true,
    required: "There has to be a size"
  },
  quantity: {
    type: Number,
    trim: true,
    required: "There has to be a quantity"
  }
});

// create mongoose schema for jobs
const productSchema = new Schema({
  name: { type: String, trim: true, required: "There has to be a name" },
  price: { type: Number, trim: true, required: "There has to be a price" },
  color: { type: String, trim: true, required: "There has to be a color" },
  sizes: [Sizes],
  description: {
    type: String,
    trim: true,
    required: "There has to be a description"
  },
  type: { type: String, trim: true, required: "There has to be a type" },
  url: { type: String, trim: true, required: "There has to be a image url" }
});
const Product = mongoose.model("product", productSchema);
module.exports = Product;
