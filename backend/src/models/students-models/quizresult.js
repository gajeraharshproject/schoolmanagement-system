const mongoose = require('mongoose')

const quizereult_schema = new mongoose.Schema({

    quiz_parent:{
        type: mongoose.Types.ObjectId,
        ref:"Quizmain",
        required:true
    },
    quiz_attend_name:{
        type:String,
        required:true
    },
    quiz_attend_id:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    quiz_totle_points:{
        type:String,
        required:true
    },
    quiz_totle_failed:{
        type:String,
        required:true
    },


},{timestamps:true});


const quizresult_model = new mongoose.model("quiz_result",quizereult_schema);

module.exports = quizresult_model;

