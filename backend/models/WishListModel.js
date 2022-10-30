const mongoose = require("mongoose");

const wishListSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Vui lòng nhập tên đồ án"],
  },
  productPrice: {
    type: Number,
    required: [true, "Vui lòng nhập giá đồ án"],
  },
  productImage: {
    type: String,
    required: [true, "Vui lòng nhập ảnh đồ án"],
  },
  quantity: {
    type: Number,
    required: [true, "Vui lòng nhập số lượng đồ án"],
  },
  userId: {
    type: String,
    required: [true, "Vui lòng nhập id người dùng"],
  },
  productId:{
    type: String,
    required: [true, "Vui lòng nhập id đồ án"],
  },
  Stock: {
    type: Number,
    required: [true, "Vui lòng nhập tên đồ án stock"],
  }
});

module.exports = mongoose.model("Wishlist", wishListSchema);
