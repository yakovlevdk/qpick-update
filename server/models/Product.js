const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  specifications: {
    storage: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    battery: {
      type: String,
      required: true,
    },
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
