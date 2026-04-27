import mongoose from "mongoose";

const excosSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "exco's name is required"],
    },
    title: {
      type: String,
      require: [true, "exco's title is required"],
    },
    image: {
      type: [String],
    },
    status: {
      type: String,
      enum: ["current", "previous"],
      default: "current",
    },
  },
  { timestamps: true },
);

export const Excos = mongoose.model("Excos", excosSchema);
