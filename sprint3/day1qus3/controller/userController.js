import {User} from "../model/user.js"
const usercreated=async(req,res)=>{
    const {username,email,password}=req.body
    try{
       const finduser=await User.find({email})
       if (finduser){
        return res.status(400).json({message:"User already exists"})
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
export {usercreated}