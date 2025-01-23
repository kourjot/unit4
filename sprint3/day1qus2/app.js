import express from "express"
import {connect} from "mongoose"
import "dotenv/config"
const app=express()
app.listen(2828,async()=>{
    try{
        await connect("mongodb://127.0.0.1:27017/Husky")
        console.log("Server started at http://localhost:2828")
    }catch(err){
        console.log("Server not connected",err)
    }
    
})