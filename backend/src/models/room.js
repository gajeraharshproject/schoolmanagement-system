const mongoose = require('mongoose');



const romm_schema = new mongoose.Schema({
    created:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin-user-login",
        required:true
    },
    createdusername:{
        type:String,
        required:true
    },
    Roomname:{
        type:String,
        required:true
    },

},{timestamps:true});


const room_model = mongoose.model("Room",romm_schema);

module.exports = room_model;

