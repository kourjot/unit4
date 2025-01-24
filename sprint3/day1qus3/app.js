import express from "express"
import "dotenv/config"
import {db} from "./db.js"
const app = express()
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
    db()
})