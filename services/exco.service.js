import { Excos } from "../models/excos.model.js";
import { excoRepository } from "../repository/exco.repository.js";

export class excoService {
  static async create(data) {
    const { name, title, image } = data;
    if (!name || !title) {
      throw new Error("Input all fields");
    }

    return excoRepository.create({
      name,
      title,
      image: [],
    });
  }
  static async getAll() {
    return await excoRepository.getAll();
  }
  static async get(id) {
    const exco = await excoRepository.get(id);
    if (!exco) {
      throw new Error("Exco not found");
    }
    return exco;
  }
  static async update(id, data) {
    const exco = await excoRepository.update(id);
    if (!exco) {
      throw new Error("Exco not found");
    }
    return await excoRepository.update(id, data);
  }
  static async delete(id) {
    const exco = await excoRepository.delete(id);
    if (!exco) {
      throw new Error("Exco Not found");
    }
    return;
  }
}
