import { Auth } from "../models/auth.model.js";
import { authRepository } from "../repository/auth.repository.js";
import bcrypt from "bcryptjs";
import { get } from "mongoose";
import { hashPassword } from "../utils/helpers/helper.js";
import { config } from "../utils/config.js";

export class authService {
  //sign up logic
  static async signUp(data) {
    const { name, email, phone, password } = data;
    if (!name || !email || !phone || !password) {
      throw new Error("Input all fields");
    }

    let checkEmailTransform = email?.toLowerCase();

    let validEmail = email.split("@")[1];

    if (validEmail !== config.EMAIL_STRUCT) {
      throw new Error("Email must be a valid school email");
    }

    //check if password exists
    const exists = await Auth.findOne({ email: checkEmailTransform });
    if (exists) {
      throw new Error("User already exists");
    }
    return await authRepository.create({
      name,
      email: checkEmailTransform,
      phone,
      password: await hashPassword(password),
    });
  }

  //sign in logic
  static async signIn(data) {
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
  }
}
