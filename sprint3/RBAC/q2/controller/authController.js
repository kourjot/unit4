import {User} from "../model/userModel.js"
import argon2 from "argon2"
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
export {createUser}