import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Enter your name"],
  },
  email: {
    type: String,
    require: [true, "Enter your email"],
  },
  phone: {
    type: String,
    require: [true, "Enter your phone number"],
  },
  password: {
    type: String,
    require: [true, "Enter your password"],
  },
  roles: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
});

export const Auth = mongoose.model("auth", authSchema);
