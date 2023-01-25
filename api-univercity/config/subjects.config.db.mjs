import { mongoose } from "mongoose";

const subjectsSchema = mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

export const Subjects = mongoose.model("Subjects", subjectsSchema, "univercity");
