import { excoService } from "../services/exco.service.js";
import { Excos } from "../models/excos.model.js";

export const excoController = {
  create: async (req, res, next) => {
    try {
      const data = req.body;
      await excoService.create(data);
      res.status(201).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  },
  getAll: async (req, res, next) => {
    try {
      const excos = await excoService.getAll();
      res.status(200).json({
        success: true,
        data: excos,
        length: excos.length,
      });
    } catch (error) {
      next(error);
    }
  },
  get: async (req, res, next) => {
    try {
      const { id } = req.params;
      const exco = await excoService.get(id);
      res.status(200).json({
        success: true,
        data: exco,
      });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const exco = await excoService.update(id, req.body);
      res.status(200).json({
        success: true,
        message: "updated Successfully",
        data: exco,
      });
    } catch (error) {
      next(error);
    }
  },
};
