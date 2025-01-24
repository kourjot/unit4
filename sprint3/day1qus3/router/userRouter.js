import {Router} from "express"
import  {usercreated} from "../controller/userController.js"
const userRouter=Router()
userRouter.post("/register",usercreated)
export {userRouter}