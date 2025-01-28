import {Schema,model} from "mongoose";
const signinSchema=new Schema({
     username:{
         type:String,
         required:true
     },
     email:{
         type:String,
         required:true,
         unique:true
     },
     password:{
         type:String,
         required:true
     }
})
const  User=model("user",signinSchema)
export  {User}