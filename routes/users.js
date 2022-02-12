const express = require('express');
//Create router
const router = express.Router();

//Fetch functionaity of COntroller
const user_contrlr = require('../controller/users_controller');

router.get('/signUp' , user_contrlr.user_SignUp);
router.get('/signIn' , user_contrlr.user_SignIn);
router.post('/create' , user_contrlr.create);
console.log("Router loaded")
//Use cannot use only exports here its nexessary to use module.exports
module.exports = router;