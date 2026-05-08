import { Excos } from "../models/excos.model.js";

export class excoRepository {
  static async create(data) {
    return Excos(data).save();
  }
  static async getAll() {
    return await Excos.find().exec();
  }
  static async get(id) {
    return Excos.findById(id).exec();
  }
  static async update(id, data) {
    return Excos.findByIdAndUpdate(id, data);
  }

  static async delete(id) {
    return Excos.findByIdAndDelete(id);
  }
}
