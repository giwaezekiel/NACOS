import { eventServices } from "../services/event.service.js ";
import cloudinary from "../utils/cloudinary.js";
// import cloudinary from "cloudinary";
import path from "path";
import multer from "../utils/multer.js";

const upload = multer;

export const eventController = {
  findAll: async (req, res, next) => {
    try {
      let data = await eventServices.findAll();
      res.status(200).json({
        data,
        success: true,
        total: data.length,
      });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      const data = req.body;
      const event = eventServices.create(data);
      res.status(201).json({
        success: true,
        data,
        image: result.secure_url,
        cloudinary_id: result.public_id,
      });
    } catch (error) {
      next(error);
    }
  },
};
