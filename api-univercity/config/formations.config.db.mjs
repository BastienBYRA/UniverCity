import { mongoose } from "mongoose";

const formationsSchema = mongoose.Schema(
    {
      name: String,
      duration: String,
      description: String,
      eduLevelAfter: String,
      numMAxPersons: Number,
      image: String
    },
    {
      timestamps: true,
    }
  );

export const Formations = mongoose.model("Formations", formationsSchema);