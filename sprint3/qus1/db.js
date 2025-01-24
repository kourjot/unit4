import {connect} from "mongoose"
import "dotenv/config"
const db=async()=>{
    try {
        await connect(process.env.DB_URL)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}
export {db}