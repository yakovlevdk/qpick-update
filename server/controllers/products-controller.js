const Product = require("../models/Product");

async function getProducts() {
  const products = await Product.find();
  return products;
}

async function addProduct(product) {
  await Product.create(product);
}


async function deleteProduct(productId) { 
  await Product.findByIdAndDelete(productId);
}

async function updateProduct(productId, productDetails) {
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    productDetails,
    { new: true }
  );

  if (!updatedProduct) {
    throw new Error("Product not found");
  }

  return updatedProduct;
}

module.exports = { getProducts, addProduct, deleteProduct, updateProduct };
