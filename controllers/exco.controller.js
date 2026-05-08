import { excoService } from "../services/exco.service.js";
import { Excos } from "../models/excos.model.js";

export class excoController {
  //create exco
  static async create(req, res, next) {
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
  }
  //fetch all available excos
  static async getAll(req, res, next) {
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
  }
  //fetch a specific exco
  static async get(req, res, next) {
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
  }
  //fetch an already existing exco and update details
  static async update(req, res, next) {
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
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const exco = await excoService.delete(id);
      res.status(200).json({
        success: true,
      });
    } catch (error) {
      next(error);
    }
  }
}
