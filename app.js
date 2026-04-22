import express from "express";
import { eventRouter } from "./routes/event.routes.js";

export const app = express();

app.use(express.json());

app.get("/health-check", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is live",
  });
});

app.use("/gallery", () => {});
app.use("/event", eventRouter);
app.use("/excos", () => {});
