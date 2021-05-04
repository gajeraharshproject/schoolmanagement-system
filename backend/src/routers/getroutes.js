const router =  require("express").Router();
const {authadminuser} = require('../middlware/authadminuser');


router.get('/checktoken',authadminuser,(req,res) => {
      
    res.json({
        msg:"ok",
        data:req.user,
        success:true
    })
       
     
});











module.exports = router;