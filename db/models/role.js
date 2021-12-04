const mongoose = require("mongoose");

const role = new mongoose.Schema({
  role: { type: String, required: ture },
  permission: { type: Array, required: ture },
});


module.exports = mongoose.model("Role",role);
