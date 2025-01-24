import {connect} from "mongoose";
import "dotenv/config"
const db=async()=>{
    try{
        await connect(process.env.DB_URL);
        console.log("Connected to MongoDB");
    }catch(err){
        console.log("Error connecting to MongoDB",err)
    }
}
export {db}