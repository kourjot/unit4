
import  {passport}  from "./googleAuth/auth.js"
import { googleRouter} from "./googleAuth/oAuthRouter.js";
import { facebookRouter } from "./facebookAuth/oAuthRouter.js"
app.use("/oauth",googleRouter)
app.use("/auth",facebookRouter)