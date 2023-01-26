import { mongoose } from "mongoose";

  const eventsSchema = mongoose.Schema(
    {
      title: String,
      description: String,
      image: String,
      dateCreation: String,
      dateBegin: String,
      dateEnd: String
    },
    {
      timestamps: true,
    }
  );

  export const Events = mongoose.model("Events", eventsSchema);