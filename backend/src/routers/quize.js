const router = require('express').Router();
const {addquizdata,getquizedata,Deletemainquiz} = require('../controlers/quizedata');
const {authadminuser} = require('../middlware/authadminuser')



router.post("/addquizdata",authadminuser,addquizdata );
router.get("/getquizdata",authadminuser,getquizedata);
router.delete("/deletequize:id",authadminuser,Deletemainquiz);

















module.exports =  router