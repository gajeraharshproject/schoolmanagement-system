const mongoose = require('mongoose');



const quizschema = new mongoose.Schema({
   
    
      Haddingquiz:{
          type:String,
          require:true
      },
      createdid:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"Admin-user-login"
      }

   


},{timestamps:true});



const quizmodel = mongoose.model("Quizmain",quizschema);


module.exports = quizmodel;