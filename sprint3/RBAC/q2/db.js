import {connect} from "mongoose"
const db=async()=>{
    try{
      await connect("mongodb://127.0.0.1:27017/Question_2")
      console.log("connected to MongoDB")
    }catch(err){
        console.log("Error connecting to MongoDB:",err)
    }
}
export {db}