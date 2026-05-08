import { eventServices } from "../services/event.service.js ";
import cloudinary from "../utils/cloudinary.js";
// import cloudinary from "cloudinary";
import path from "path";
// import multer from "../utils/multer.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "myfolder",
//     format: async (req, file) => "png",
//     public_id: (req, file) => file.fieldname + "-" + Date.now(),
//   },
// });

// export const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

export class eventController {
  static async findAll(req, res, next) {
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
  }
  static async create(req, res, next) {
    try {
      const data = req.body;

      const event = eventServices.create(data);
      res.status(201).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const event = await eventServices.update(id, req.body);
      res.status(200).json({
        success: true,
        data: event,
      });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const event = await eventServices.delete(id);
      res.status(200).json({
        success: true,
      });
    } catch (error) {
      next(error);
    }
  }
}
