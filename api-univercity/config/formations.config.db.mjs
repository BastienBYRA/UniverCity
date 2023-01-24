import { mongoose } from "mongoose";

const formationsSchema = mongoose.Schema(
    {
      name: String,
      duration: String,
      description: String,
      eduLevelAfter: String,
      numMAxPerson: Number,
      image: String
    },
    {
      timestamps: true,
    }
  );

export const User = mongoose.model("Formations", formationsSchema, 'univercity');