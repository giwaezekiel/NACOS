import { Auth } from "../models/auth.model.js";
import { authRepository } from "../repository/auth.repository.js";
import bcrypt from "bcryptjs";
import { get } from "mongoose";
import { hashPassword } from "../utils/helpers/helper.js";

export const authService = {
  signUp: async (data) => {
    const { name, email, password } = data;
    if (!name || !email || !password) {
      throw new Error("Input all fields");
    }
    //check if password exists
    const exists = await Auth.findOne({ email });
    if (exists) {
      throw new Error("User already exists");
    }

    return await authRepository.create({
      name,
      email,
      password: await hashPassword(password),
    });
  },
  signIn: async (data) => {
    const { email, password } = data;
    if (!email || !password) {
      throw new Error("Input all fields");
    }

    //check if password exists
    const exists = await authRepository.get(email);

    if (!exists) {
      throw new Error("Invalid credentials");
    }

    const comparePassword = await bcrypt.compare(password, exists.password);
    if (!comparePassword) {
      throw new Error("Wrong credentials");
    }

    return;
  },
};
