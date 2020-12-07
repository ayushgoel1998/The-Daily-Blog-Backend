const express=require('express');
const app =express();
const morgan=require('morgan');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const expressValidator=require('express-validator');
//dotenv.config();





/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ayush:ayush@cluster0.awanh.mongodb.net/hello?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true },{ useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/



mongoose.connect("mongodb+srv://ayush:ayush@cluster0.awanh.mongodb.net/hello?retryWrites=true&w=majority",
{ useUnifiedTopology: true }).then(()=>console.log('DB Connected'))
 
mongoose.connection.on("error",err=>{
    console.log(`DB connection error:${err.message}`);
})


const postroutes=require("./routes/post");
const authroutes=require("./routes/auth");


app.use(morgan("dev"));   
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/",postroutes);
app.use("/",authroutes);
 
const PORT= 27016; 
app.listen(PORT,()=>{
    console.log(`A node js api is working on port:${PORT}`);
}); 
  