import {connect} from "mongoose"
const db=async()=>{
    try{
        await connect("mongodb://127.0.0.1:27017/RBAC")
        console.log("Connected to MongoDB")
    }
    catch(err){
        console.error("Failed to connect to MongoDB",err)
    }
}
export {db}