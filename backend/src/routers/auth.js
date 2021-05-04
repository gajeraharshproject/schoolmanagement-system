const router = require('express').Router();

const { Router } = require('express');
const {Admin_registration,Login_admin_user,Admin_user_logout,profiledetailsupdata,updateprofilephoto} = require('../controlers/auth')
const {authadminuser} = require('../middlware/authadminuser');

router.post('/register',  Admin_registration);
router.post('/login',Login_admin_user);
router.post('/logout',Admin_user_logout );
router.put('/pdu', authadminuser,  profiledetailsupdata );
router.put('/upp' , authadminuser,updateprofilephoto);






  






 //export Router

 module.exports = router;