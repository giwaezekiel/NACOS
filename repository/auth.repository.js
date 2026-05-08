import { Auth } from "../models/auth.model.js";

export class authRepository {
  static async create(data) {
    return await Auth.create(data);
  }
  static async get(data) {
    return await Auth.findOne({ email: data });
  }
}
