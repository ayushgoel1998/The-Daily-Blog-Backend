// for user signin and signup:
const express=require('express')
const {signup}=require('../controllers/auth')
const {userSignupValidator}=require('../validator/index');  // we can also skip index as index file loads automatically
const router=express.Router();     // now router become express router

//router.get("/",getposts)
router.post("/signup",userSignupValidator,signup);   // it now first validate the constraints on json file as writtern in the model/post.js

module.exports=router; 

 