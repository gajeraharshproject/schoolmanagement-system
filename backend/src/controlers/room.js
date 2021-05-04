  
  const room = require('../models/room');


  exports.createroom = async (req,res) => {
       const {roomname} = req.body;
 
       if(!roomname) return res.status(400).json({msg:"Enter All Fildes",success:false});
      const checkroom = await room.findOne({Roomname:roomname});
      if(checkroom) return res.status(400).json({msg:"Room is Alredy exist",success:false});

       const addroom = new room({

        created:req.adminuserid,
        Roomname:roomname,
        createdusername:req.user.Username
       });


       const roomsave = await addroom.save();
        if(!roomsave) return res.status(400).json({msg:"try agein",success:false});
        res.status(200).json({msg:"Room is Created",data:roomsave});
  }


  exports.Deleteroom = async (req,res) => {
      
       const {roomid} = req.params;

       const deleteroom = await room.findByIdAndRemove(roomid);
       if(!deleteroom) return res.status(400).json({msg:"Try Again",success:false});

       res.status(200).json({msg:"User as Deleted",success:true,data:deleteroom});
       


     }

     exports.getroomdata = async (req,res) => {
       
           try {
                const fecheromm = await room.find({});

                if(!fecheromm) return res.status(400).json({msg:"no Record found",success:false});
                res.status(200).json({msg:"success supluy data",data:fecheromm});

           } catch (error) {
                console.log(error)
           }

     }



  
const chatmodel = require("../models/roomchat");
     exports.getchaterecord = async (req,res) => {

          const id = req.params.id;
        //  console.log(id);
          try {
               
           const findrecords = await chatmodel.find({roomid:id});
           if(!findrecords) return res.status(400).json({msg:"try agein no recordes",success:false});
  // console.log(findrecords);
           res.status(200).json({msg:"supplid chat messages",success:true,data:findrecords});


          } catch (error) {
               console.log(error)
          }

     }
     exports.addchatdata = async (req,res) => {
           
          const {roomid,name,message} = req.body;
          //console.log(req.body);
           try {
                
               const addroom  =  new chatmodel({
                    roomid:roomid,
                    name:name,
                    message:message
               });
               const addroomsave = await addroom.save();


               if(!addroomsave) return res.status(400).json({msg:"try again no abel to add",success:false});
               res.status(200).json({msg:"data added chate",success:true,data:addroomsave});


           } catch (error) {
                console.log(error)
           }
     }    


     exports.getroom = async (req,res) => {

          try {
               
               const getdata = await room.findById(req.params.id);
               if(!getdata) return res.status(400).json({msg:"no data found",success:false});

               res.status(200).json({msg:"data success",success:true,data:getdata});

          } catch (error) {
               console.log(error)
          }

     }