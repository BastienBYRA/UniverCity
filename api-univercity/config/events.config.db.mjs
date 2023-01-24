import { mongoose } from "mongoose";

  const eventsSchema = mongoose.Schema(
    {
      name: String,
      dateCreation: Date,
      dateBegin: Date,
      dateEnd: Date,
      description: String
    },
    {
      timestamps: true,
    }
  );

  export const Events = mongoose.model("Events", eventsSchema, 'univercity');