import {User} from "../model/user.js"
import argon2 from "argon2"
import jwt from "jsonwebtoken"
import "dotenv/config"
const usercreated=async(req,res)=>{
    const {username,email,password}=req.body
    try{
       const finduser=await User.findOne({email})
       if(finduser){
        return res.status(400).json({message:"Email already exists"})
       }
       const hash=await argon2.hash(password)
       const user=new User({
        username,
        email,
        password:hash
       })
       await user.save()
       res.status(200).json({
        message:"User created successfully",
        user
       })
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
const login=async(req,res)=>{
    const {email,password} =req.body
    try{
        if(!email||!password){
            return res.status(400).json({message:"Please provide email and password"})
        }
        const user=await User.findOne({email})
        if(!user){
            return res.status(401).json({message:"Invalid credentials"})
        }
       const vaild=await argon2.verify(user.password,password)
       if(vaild){
        const token=jwt.sign({
            id:user._id,
            username:user.username
        },process.env.KEY)
        res.status(200).json({message:"Login successful",token})
       }
    res.status(200).json({
        msg:"login successful"
    })
    }catch(err){
        res.status(500).json({message:err.message})
    }

}
export {usercreated,login}