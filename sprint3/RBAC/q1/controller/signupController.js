import { User } from "../model/userModel.js";
import argon2 from "argon2";
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hash = await argon2.hash(password);
    const newUser = new User({
      username,
      email,
      password: hash,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export { signup };
