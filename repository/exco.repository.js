import { Excos } from "../models/excos.model.js";

export const excoRepository = {
  create: async (data) => {
    return Excos(data).save();
  },
  getAll: async () => {
    return await Excos.find().exec();
  },
  get: async (id) => {
    return Excos.findById(id).exec();
  },
  update: async (id, data) => {
    return Excos.findByIdAndUpdate(id, data);
  },
};
