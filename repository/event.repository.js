import { Event } from "../models/event.model.js";
export const eventRepository = {
  create: async (data) => {
    return await new Event(data).save();
  },
  getEvents: async () => {
    return Event.find();
  },
  findById: async (id) => {
    return Event.findById(id);
  },
};
