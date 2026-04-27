import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    date: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      default: "Edo State University Iyamho,Uzairue",
    },
    image: {
      type: [String],
    },
    status: {
      type: String,
      enum: ["upcoming", "previous"],
      default: "upcoming",
    },
    cloudinary_id: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Event = mongoose.model("Event", eventSchema);
