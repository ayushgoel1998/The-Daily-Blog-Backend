const mongoose=require('mongoose');
//const uuidv1=require('uuid/v1');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
// const { nextTick } = require('process');
// const { doesNotMatch } = require('assert');

const userschema= new mongoose.Schema({
    name:{
        type:String,
        trim:true,               // to remove the extra spaces:         
        required:true          // to make mandatory input from user:
    },
    email:{
        type:String,
        trim:true,               // to remove the extra spaces:         
        required:true          // to make mandatory input from user:
    },
    hashed_password:{                      //hashed_password is to make password encrytped.
        type:String,             // to remove the extra spaces:         
        required:true          // to make mandatory input from user:
    },
    salt:String,              // random large string
    created:{
        type:Date,
        default:Date.now
    },
    updated:Date                          // when user update the data date of updation will be updated.


}); 

userschema.virtual('password')
.set(function(password){
    //create temporary variable called _password
    this._password=password
    //generate timestamp
    this.salt=uuidv4();                  // uuidv1 is package to encrypt the password
    //encrypted password
    this.hashed_password=this.encryptPassword(password);
})
.get(function(){
    return this._password
})


//  ENCRYPTION PROCESS
userschema.methods={
    encryptPassword:function(password){
        if(!password) 
        return "";
        try{
                return crypto
                .createHmac('sha1', this.salt)                    // sha1 will encrypt password into string
                .update(password)
                .digest('hex');
        }
        catch(err){
           // console.log("isme");
                return "";
        }
    }
};
 
module.exports=mongoose.model("User",userschema);