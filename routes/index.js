const express = require('express');
//Create router
const router = express.Router();

//Fetch functionaity of COntroller
const home_contrlr = require('../controller/home_controller');

router.get('/' , home_contrlr.home);
router.use('/users' , require('./users'))
console.log("Router loaded")
//Use cannot use only exports here its nexessary to use module.exports
module.exports = router;