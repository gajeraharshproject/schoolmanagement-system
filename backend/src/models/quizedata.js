 const mongoose = require('mongoose');



 const quizschema = new mongoose.Schema({
    
     
                parantid:{
                   type:mongoose.Schema.Types.ObjectId,
                   ref:"Quizmain",
                   required:true,
                  
               },
                Created:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"Admin-user-login",
                    required:true
                  },
                Quistion:{
                    type:String,
                    required:true
                },
                OptionA:{
                    type:String
                },
                OptionB:{
                    type:String
                },
                OptionC:{
                    type:String
                },
                OptionD:{
                    type:String
                },
                Quistion_answare:{
                    type:String,
                    required:true
                }
            
    


 },{timestamps:true});



 const quizmodel = mongoose.model("Quizedata",quizschema);


 module.exports = quizmodel;