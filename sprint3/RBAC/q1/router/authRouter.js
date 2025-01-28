import {signup} from "../controller/signupController.js"
import {logger} from "../controller/loginController.js"
import {verify} from "../middlewere/tokenVerification.js"
import {getphoto} from "../controller/getdata.js"
import Router from "express"
const userRouter=Router()
userRouter.post("/registration",signup)
userRouter.post("/login",logger)
userRouter.get("/verify",verify,getphoto)

export {userRouter}