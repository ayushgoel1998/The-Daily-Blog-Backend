
const Post= require("../model/post")

exports.getposts=(req,res)=>{                       // as it is api making send response always in json format
                            
    const posts =Post.find()
    .then((posts)=>{
        res.json({posts:posts})
    })
    .catch(err=>console.log(err));                        // if there is any error catch the error
};

exports.createPost=(req,res)=>{
    const post = new Post(req.body);
   // console.log(" Creating post: ",req.body);
   post.save().then(result=>{
       res.json({ 
           post:result
       });
   });
   
};