import jwt from "jsonwebtoken"
import "dotenv/config"
const verify=(req,res,next)=>{
    const auth=req.header("Authorization")
   if(!auth){
       return res.status(401).json({message:"No token, authorization denied"})
   }
   try{
    const vaild=jwt.verify(auth,process.env.KEY)

    if(vaild){
        next()
    }
    else{
        return res.status(403).json({message:"Token is not valid"})
    }
   }catch(err){
    return res.status(400).json({message:"Token is not valid"})
   }
}
export {verify}
