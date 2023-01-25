import { mongoose } from "mongoose";

const usersSchema = mongoose.Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    mobile: String,
    INE: String,
    isAdmin: Boolean,
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subjects" }],
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", usersSchema);
