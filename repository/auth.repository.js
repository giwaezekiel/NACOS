import { Auth } from "../models/auth.model.js";

export const authRepository = {
  create: async (data) => {
    return await Auth.create(data);
  },
  get: async (data) => {
    return await Auth.findOne({ email: data });
  },
};
