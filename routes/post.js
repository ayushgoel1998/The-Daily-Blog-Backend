const express=require('express')
const {getposts,createPost}=require('../controllers/post')
const {createPostValidator}=require('../validator/index');  // we can also skip index as index file loads automatically
const router=express.Router();     // now router become express router

router.get("/",getposts)
router.post("/post",createPostValidator,createPost)   // it now first validate the constraints on json file as writtern in the model/post.js

module.exports=router; 

  