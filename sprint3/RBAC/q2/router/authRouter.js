import Router from "express"
import {createUser} from "../controller/authController.js"
const userRouter=Router()
userRouter.post("/register",createUser)
export {userRouter}