const mongoose = require("mongoose");




const chateschema = new mongoose.Schema({

    roomid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

},{timestamps:true});


const chatmodel = mongoose.model("Roomchate",chateschema);

module.exports = chatmodel