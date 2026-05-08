import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Auth } from "../../models/auth.model.js";
import { config } from "../config.js";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const payload = async (email) => {
  const exists = await Auth.findOne({ email });
  // token generation
  const payload = {
    email: exists?.email,
    name: exists?.name,
  };
  return jwt.sign(payload, config.JWT_SECRET, {
    expiresIn: "2d",
  });
};

export const emailVerification = () => {};
