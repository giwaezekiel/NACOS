import { eventRepository } from "../repository/event.repository.js";
import { Event } from "../models/event.model.js";

export const eventServices = {
  findAll: async () => {
    return await eventRepository.getEvents();
  },
  create: async (data) => {
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
  },
};
