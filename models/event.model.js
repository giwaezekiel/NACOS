import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    date: {
      type: date,
      required: true,
    },
    location: {
      type: String,
      default: "Edo State University Iyamho,Uzairue",
    },
  },
  { timestamps: true },
);

export const Event = mongoose.Model("Event", eventSchema);
