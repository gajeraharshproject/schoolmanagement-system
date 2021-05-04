 const { findOne } = require('../models/quizedata');
const quizedatamodel = require('../models/quizedata')
 
const Quizmainmodel = require("../models/quizemain")


exports.addquizdata = async (req,res) => {
       const {QuizData} = req.body.data;
       const Headding = req.body.Headding;

      
       try {
          
         const addheddingdat = new Quizmainmodel({Haddingquiz:Headding,createdid:req.adminuserid});
         const saveh = await addheddingdat.save();




           for (let i = 0; i < QuizData.length; i++) {
             
               QuizData[i].Created = req.adminuserid;
           //  const s =   QuizData[i].Haddingquiz;
            //  const sp = s.split(" ").join("");
           //  QuizData[i].Haddingquiz = sp;

             QuizData[i].parantid = saveh._id;
               
            const adddatatoquize = new quizedatamodel(QuizData[i]);
            const savequizdata = await adddatatoquize.save();
            if(!savequizdata) return res.status(400).json({msg:"Try agin",success:false});
           }
           
           res.status(200).json({msg:"Data Add success",success:true})
         
          
       } catch (error) {
           console.log(error.message);
       }
}


exports.getquizedata = async (req,res) => {
     try {
         
        const fetchdata = await Quizmainmodel.find({createdid:req.adminuserid});
        
       if(!fetchdata) 
            return res.status(400).json({msg:"no data found",success:false});
       
       res.status(200).json({success:true,data:fetchdata});
     } catch (error) {
         console.log(error.message);
     }
}
 


exports.Deletemainquiz = async (req,res) => {
    try{
     
       const id = req.params.id;

       const deleteinmainquize = await Quizmainmodel.findByIdAndRemove(id);

       if(!deleteinmainquize)
          return  res.status(400).json({msg:"try agin",success:false})

       const deletequizdata = await quizedatamodel.deleteMany({parantid:id});

       if(!deletequizdata)
          return res.status(400).json({msg:"try agin",success:false})
      
       res.status(200).json({msg:"deleted",success:true,data:{deleteinmainquize,deletequizdata}})
        
 
    } catch(error){
      console.log(error)
    }
}