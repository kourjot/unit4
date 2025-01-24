import express from "express"
import {db} from "../db.js"
const app=express()
app.listen(3030,()=>{
    console.log("Server is running on port 3030")
    db()
})
