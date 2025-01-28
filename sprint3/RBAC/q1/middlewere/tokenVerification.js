import jwt from "jsonwebtoken"
import "dotenv/config"
const verify=(req,res,next)=>{
    const authHeader = req.header("Authorization")
    
    if(!authHeader){
        return res.status(401).json({message:"No token provided"})
    }
    try{
        const vaild=jwt.verify(authHeader,process.env.KEY)
        
        if(vaild){
           
            next()
        }
        else{
            return res.status(403).json({message:"Token Invalid"})
        }
    }
    catch(err){
        return res.status(400).json({message:"Token is not valid"})
    }
}
export {verify}