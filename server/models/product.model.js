const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  barcodeid: {
    type: String,
    required: true,
  },
  imagename: {
    type: String,
  },
  productname: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  total_sold: {
    type: Number,
    default: 0,
  },
  shopid: {
    type: String,
    required: true,
    ref: "Admin",
  },
  productthreshold: {
    type: Number,
  },
});

const Products = mongoose.model("Product", productSchema);

module.exports = Products