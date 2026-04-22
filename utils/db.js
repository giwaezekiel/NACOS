import { config } from "./config.js";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(config.DB_URI);
    console.log("database connected Succesfully");
  } catch (error) {}
};
