import { Router } from "express";
import { eventController } from "../controllers/event.controller.js";
// import cloudinary from "../utils/cloudinary.js";
// import multer from "../utils/multer.js";

export const eventRouter = Router();

eventRouter.post("/", eventController.create);
eventRouter.get("/", eventController.findAll);
