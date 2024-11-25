import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a product name"],
    trim: true,
    maxLength: [100, "Product name cannot be more than 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Please provide product description"],
    maxLength: [2000, "Description cannot be more than 2000 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please provide product price"],
    min: [0, "Price must be non-negative"],
  },
  quantity: {
    type: Number,
    required: [true, "Please provide product quantity"],
    min: [0, "Quantity must be non-negative"],
  },
  image: {
    type: String,
    required: [true, "Please provide product image"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);