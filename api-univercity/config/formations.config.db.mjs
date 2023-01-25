import { mongoose } from "mongoose";

const formationsSchema = mongoose.Schema(
    {
      title: String,
      img: String,
      desc: String,
      descShort: String,
      duration: String,
      niveau: String,
      numMaxPersons: Number,
    },
    {
      timestamps: true,
    }
  );

export const Formations = mongoose.model("Formations", formationsSchema);