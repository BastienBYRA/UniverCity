import { mongoose } from "mongoose";

  const companiesSchema = mongoose.Schema(
    {
      name: String,
      description: String,
      image: String,
      siteLink: String,
    },
    {
      timestamps: true,
    }
  );

  export const Companies = mongoose.model("Companies", companiesSchema);