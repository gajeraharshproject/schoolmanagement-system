  const jwt = require("jsonwebtoken");
  const admin_user_registration = require("../models/admin-user");



exports.authadminuser = async (req,res,next) => {
     
    const {token} = req.cookies;

     if(!token) return  res.status(400).json({msg:"Please Login First",success:false})
     
      const {_id} = jwt.verify(token,process.env.SECRETE);
      
     const adminfinduserid  = await admin_user_registration.findById({_id}); 
      
        if(!adminfinduserid) return res.status(400).json({msg:"Please Login First"});
     
    req.adminuserid = adminfinduserid._id;
    req.user = adminfinduserid;
    next();

}