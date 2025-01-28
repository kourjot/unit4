import {Schema,model} from "mongoose"
const userSchema=new Schema({
    username:{
        type:String,
        requird:String,

    },
    email:{
        type:String,
        required:String,
        unique:true
    },
    password:{
        type:String,
        required:String
    }
})
const User=model("user",userSchema)
export {User}