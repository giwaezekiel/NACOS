import { Router } from "express";
import { eventController } from "../controllers/event.controller.js";
import cloudinary from "../utils/cloudinary.js";
import multer from "../utils/multer.js";

const upload = multer;

export const eventRouter = Router();

eventRouter.post("/", upload.single("image"), eventController.create);
eventRouter.get("/", eventController.findAll);
