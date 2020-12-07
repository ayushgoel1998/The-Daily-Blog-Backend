// this file is for authentication of user purpose:

const User = require('../model/user');

exports.signup =async (req,res) => {
    const userExists = await User.findOne({email:req.body.email})
    if(userExists) return res.status(403).json({
        error:"Email is taken already"
    });
    const user = await new User(req.body);
    await user.save();
    res.status(200).json({message:"Signup Up Successful,please login."});
};
 