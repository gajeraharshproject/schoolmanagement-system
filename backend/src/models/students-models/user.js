const mongoose = require("mongoose");


const user_schema = new mongoose.Schema({
   
    Username:{
        type:String,
        requried:true,
        unique:true
    },
    Fullname:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
  

},{timestamps:true});

 const user_model = new mongoose.model("User",user_schema);

 module.exports = user_model;


 