
exports.createPostValidator=(req,res,next)=>{
    //for title
    req.check("title","Title should be between 4 and 150 characters").isLength({
        min:4,
        max:150
    });

    //for body
    req.check("body","Body should be between 4 and 2000 characters").isLength({
        min:4,
        max:2000
    });
    //check for errors
    const errors=req.validationErrors();
    //if error show the first one as they happens 
    if(errors){
        const firstError=errors.map((error)=>error.msg)[0]
        return res.status(400).json({error:firstError})
    }

    // be sure it will proceed to next middle ware
    next(); 
};

exports.userSignupValidator=(req,res,next)=>{
    // name is not null and between 4 to 20 characters.
    req.check("name","Name is required").notEmpty();
    //email is not null,valid and normalized.
    req.check("email","Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)                       // regular expression to check the presence of @
    .withMessage("Email must contain @")
    .isLength({
        min:4,
        max:2000
    })
    //check for password
    req.check("password","Password is required").notEmpty();
    req.check('password')
    .isLength({min:6})
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)                        // regular expression to check the presence of atleast one digit
    .withMessage("password must contain a single digit")


    //check for errors
    const errors=req.validationErrors();
    //if error show the first one as they happens 
    if(errors){
        const firstError=errors.map((error)=>error.msg)[0]
        return res.status(400).json({error:firstError})
    }

    // be sure it will proceed to next middle ware
    next();
}