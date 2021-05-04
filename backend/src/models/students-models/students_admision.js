const mongoose = require('mongoose');


const Students_admision_schema = new mongoose.Schema({
     
    Student_fullname:{
        type:String,
        required:true
    },
    Student_Username:{
        type:String,
        required:true,
        unique:true,
    },
    Student_Address:{
        type:String,
        required:true
    },
    Student_ClassName:{
        type:String,
        required:true
    },
    Studetn_Age:{
        type:Number,
        required:true
    },
    



},{timestamps:true});




const student_addmision_model =  new mongoose.model("Student_admision",Students_admision_schema);

module.exports = student_addmision_model;