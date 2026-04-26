import { config } from "./config.js";
import mongoose from "mongoose";
import { errorAuditEmitter } from "./loggers/error.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.DB_URI);
    auditEmitter.emit("log", {
      type: "INFO",
      message: "Database connected Successfully ",
    });
  } catch (error) {
    await errorAuditEmitter.emit("error", {
      type: "ERROR",
      message: error instanceof Error ? error.message : String(error),
    });
  }
};
