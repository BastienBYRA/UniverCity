import { mongoose } from "mongoose";

  const eventsSchema = mongoose.Schema(
    {
      name: String,
      dateCreation: String,
      dateBegin: String,
      dateEnd: String,
      description: String
    },
    {
      timestamps: true,
    }
  );

  export const Events = mongoose.model("Events", eventsSchema);