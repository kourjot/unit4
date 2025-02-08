import { Router } from "express";
import { passport } from "../facebookAuth/auth.js";
import { User } from "../model/userModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import argon2 from "argon2";

const facebookRouter = Router();

facebookRouter.get(
  "/",
  passport.authenticate("facebook", { scope: ["email"] })
);

facebookRouter.get(
  "/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/login",
    session: false,
  }),
  async (req, res) => {
    console.log("Facebook callback triggered");
    let { email, name: username } = req.user._json;
    console.log(email);
    let existUser = await User.findOne({ email });
    let user = {};
    if (existUser) {
      user = {
        username: existUser.username,
        email,
        id: existUser._id,
      };
    } else {
      const hash = await argon2.hash("Password123");
      const newUser = new User({
        username,
        email,
        password: hash,
      });
      await newUser.save();
      user = {
        username,
        email,
        id: newUser._id,
      };
    }
    console.log("Facebook se aaya---->", user);
    // Create a JWT with user data
    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7days",
    });

    // Redirect the user to your frontend URL
    res.redirect(`https://b42-web-075-api-unicorns-1.onrender.com/signin?token=${token}`);
  }
);

export { facebookRouter };
