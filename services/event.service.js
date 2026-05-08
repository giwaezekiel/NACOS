import { eventRepository } from "../repository/event.repository.js";
import { Event } from "../models/event.model.js";

export class eventServices {
  static async findAll() {
    return await eventRepository.getEvents();
  }
  static async create(data) {
    const { title, description, date, venue, image } = data;

    if (!title || !description | !date) {
      throw new Error("Input all fields");
    }

    return eventRepository.create({
      title,
      description,
      date,
      venue,
    });
  }
  static async update(id, data) {
    const event = await eventRepository.update(id);
    if (!event) {
      throw new Error("Event not found");
    }
    return await eventRepository.update(id, data);
  }
  static async delete(id) {
    const event = await eventRepository.delete(id);
    if (!event) {
      throw new Error("Event not found");
    }
    return;
  }
}
