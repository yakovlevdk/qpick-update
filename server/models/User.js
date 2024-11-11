const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: null,
  },
  country: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    default: null,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
