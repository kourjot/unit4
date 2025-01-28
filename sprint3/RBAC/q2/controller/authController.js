import {User} from "../model/userModel.js"
import argon2 from "argon2"
import jwt from "jsonwebtoken"
import "dotenv/config"
const createUser=async(req,res)=>{
    const {username,email,password} =req.body
    try{
        const finduser=await User.findOne({email})
        if(finduser) return res.status(400).json({error:"User already exists"})
        const hash=await argon2.hash(password)
        const newuser=new User({
            username,
            email,
            password:hash
        })
        await newuser.save()
        res.status(201).json({message:"User registered successfully"})
    }catch(err){
        return res.status(400).json({error:err.message})
    }
}
const login=async(req,res)=>{
    const {email,password} = req.body
    try{
       const finduser=await User.findOne({email})
       if(!finduser){
        return res.status(400).json({error:"User not found"})
       }
       const vaild=await argon2.verify(finduser.password,password)
       if(!vaild){
        return res.status(400).json({error:"Invalid password"})
       }
       const token=jwt.sign({
        id:finduser._id,
        username:finduser.username
       },process.env.KEY,{
        expiresIn:'1d'
       })
       res.status(200).json({
        message:"User logged in successfully",
        token:token
       })
    }catch(err){
        return res.status(400).json({error:err.message})
    }
}

export {createUser,login}