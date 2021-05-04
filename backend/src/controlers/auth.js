//models
const admin_user_registration = require("../models/admin-user");
//librarys

const bcrypt = require("bcrypt");
exports.Admin_registration = async (req, res) => {
  const { Username, Password, Cpassword } = req.body;
  

  if (!Username || !Password || !Cpassword) {
    return res
      .status(400)
      .json({ msg: "Please Eanter all filds", success: false });
  }

  const userexist = await admin_user_registration.findOne({ Username });
  if (userexist) {
    return res
      .status(400)
      .json({
        msg: "Username is allredy exixt please try othre",
        success: false,
      });
  }
  if (Password != Cpassword)
    return res
      .status(400)
      .json({ msg: " conform password wrong", success: false });

  const hashpassword = await bcrypt.hash(Password, 10);

  const adduser = await new admin_user_registration({
    Username,
    Password: hashpassword,
  });

  const save_user = await adduser.save();

  if (!save_user)
    return res.status(400).json({ msg: "try agin", success: false });

  res
    .status(200)
    .json({ msg: "Acount Created", success: true, data: save_user });
};

const jwt = require("jsonwebtoken");
exports.Login_admin_user = async (req, res) => {
  const { Username, Password } = req.body;

  if (!Username || !Password)
    return res.status(400).json({ msg: "Enter all filds", success: false });

  const userchek = await admin_user_registration.findOne({ Username });

  if (!userchek)
    return res
      .status(400)
      .json({ msg: "Enter valid Usernmae", success: false });
  const pascompare = await bcrypt.compare(Password, userchek.Password);

  if (!pascompare)
    return res
      .status(400)
      .json({ msg: "Enter valid password", success: false });
     
      const {_id,Fullname,Contect,Address,Profilephoto} = userchek;
      const token = jwt.sign({
         _id,
         Fullname,
         Username,
         Contect,
         Address,
         Profilephoto
      },process.env.SECRETE);

      res.cookie('token',token , {expire: 360000 + Date.now()});
 

  res.status(200).json({ msg: "You are logedin", success: true,data:userchek });
};






exports.Admin_user_logout = async (req,res) => {
    
       const {token} = req.cookies;

           res.clearCookie('token');

        res.status(200).json({msg:"user logouted" , success:true})
               
}




// profiule updata in  admin user 


 exports.profiledetailsupdata = async (req,res) => {

    const {Fullname,Contect,Address,Username} = req.body;
     
     if(!Fullname || !Contect || !Address) {
       return res.status(400).json({msg:"Plese Enter All Details",success:false})
     }
     console.log(Fullname,Address)
      const updata_admin_profile =  await admin_user_registration.findByIdAndUpdate(req.adminuserid,{
            Fullname,
            Contect,
            Address,
            Username
      },{
          new:true
      });
      
      if(!updata_admin_profile) return res.status(400).json({msg:"try again",success:false});

      res.status(200).json({msg:"Profile Updated",success:true,data:updata_admin_profile});

}
const formidable = require("formidable");
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');


exports.updateprofilephoto = async (req,res) => {
  const form = formidable({ multiples: true });
    form.parse(req,(error,fildes,files) => {
      // console.log(files);
  
      const {type} = files.image;
      const split = type.split('/');
     const ext = split[1].toLowerCase();

     files.image.name = uuidv4() + '.' + ext;
    
 
     const path = `${__dirname}../../../uplode/${files.image.name}`;

     fs.copyFile(files.image.path , path , (error) => {
      if(!error) {
         
          // console.log('image uploded');
          const adminprofilephotoupdate =  admin_user_registration.findByIdAndUpdate(req.adminuserid,{
            Profilephoto:files.image.name
          },{
            new:true
          },function(err,data) {
            if(err) throw err;
            res.status(200).json({msg:"Image Uploded",success:true,data});
          });
         

    

      }else{  res.status(400).json({msg:"Try agin",success:false}); }
      if(error) throw error;
  });

    });

}