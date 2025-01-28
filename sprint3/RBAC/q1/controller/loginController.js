import { User } from "../model/userModel.js";
import argon2 from "argon2"
import jwt from "jsonwebtoken"
import  "dotenv/config"
const logger = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await User.findOne({ email });
    if (!findUser) return res.status(404).send({ message: "User not found" });
    const vaild =await argon2.verify(findUser.password,password)
    if (!vaild) return res.status(401).send({ message: "Invalid credentials" });
    const token=jwt.sign(
        {
        userId: findUser._id,
        email: findUser.email
    },
    process.env.KEY,
        { expiresIn: '1d' }
    )
    return res.status(200).json({
        message: "User logged in successfully",
        token:token
    })
   
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
    return;
  }
};
export { logger };
