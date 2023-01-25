import { mongoose } from "mongoose";

const usersSchema = mongoose.Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
    login: String,
    password: String,
    mobile: String,
    INE: String,
    subjects: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", usersSchema, "univercity");
