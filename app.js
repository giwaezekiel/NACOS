import express from "express";

export const app = express();

app.use(express.json());

app.get("/health-check", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is live",
  });
});

app.use("/gallery", () => {});
app.use("/event", () => {});
app.use("/excos", () => {});
