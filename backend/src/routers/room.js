const router = require('express').Router();
const {createroom,Deleteroom,getroomdata,getchaterecord,addchatdata,getroom} = require('../controlers/room');
const {authadminuser} = require('../middlware/authadminuser')

router.post("/createroom",authadminuser,createroom);
router.delete("/rroom:roomid",authadminuser,Deleteroom);
router.get("/roomsdata",authadminuser,getroomdata);
router.post("/addchatrecord",authadminuser,addchatdata);
router.get("/getchatedata:id",authadminuser,getchaterecord);
router.get("/getroom:id",authadminuser,getroom);























module.exports =  router