const mongoose = require("mongoose");

const task = mongoose.Schema({
    name:{ type: String , require:true },
    isDelete: {type:Boolean , default: false},
    user : { type : mongoose.Schema.Types.ObjectId , ref:"User"}
});

module.exports = mongoose.model("Task", task);