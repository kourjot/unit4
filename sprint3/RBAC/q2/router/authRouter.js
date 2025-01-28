import Router from "express"
import {createUser,login} from "../controller/authController.js"
import {verify}from "../middlewere/authverification.js"
import {getprivate} from "../controller/privateController.js"
const userRouter=Router()

userRouter.post("/register",createUser)
userRouter.post("/login",login)
userRouter.get("/private",verify,getprivate)
export {userRouter}