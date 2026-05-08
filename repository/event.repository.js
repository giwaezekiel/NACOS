import { Event } from "../models/event.model.js";
export class eventRepository {
  static async create(data) {
    return await new Event(data).save();
  }
  static async getEvents() {
    return Event.find();
  }
  static async findById(id) {
    return Event.findById(id);
  }
  static async update(id, data) {
    return Event.findByIdAndUpdate(id, data);
  }

  static async delete(id) {
    return Event.findByIdAndDelete(id);
  }
}
