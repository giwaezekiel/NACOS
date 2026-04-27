import { Excos } from "../models/excos.model.js";
import { excoRepository } from "../repository/exco.repository.js";

export const excoService = {
  create: async (data) => {
    const { name, title, image } = data;
    if (!name || !title) {
      throw new Error("Input all fields");
    }

    return excoRepository.create({
      name,
      title,
      image: [],
    });
  },
  getAll: async () => {
    return await excoRepository.getAll();
  },
  get: async (id) => {
    const exco = await excoRepository.get(id);
    if (!exco) {
      throw new Error("Exco not found");
    }
    return exco;
  },
  update: async (id, data) => {
    const exco = await excoRepository.update(id);
    if (!exco) {
      throw new Error("Exco is not found");
    }
    return await excoRepository.update(id, data);
  },
};
