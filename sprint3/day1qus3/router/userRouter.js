import {Router} from "express"
import  {usercreated,login} from "../controller/userController.js"
const userRouter=Router()
userRouter.post("/register",usercreated)
userRouter.post("/login",login)
export {userRouter}