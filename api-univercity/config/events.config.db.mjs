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

  const eventsSchema = mongoose.Schema(
    {
      name: String,
      dateCreation: String,
      dateEvent: String,
      Description: String
    },
    {
      timestamps: true,
    }
  );

  const subjectsSchema = mongoose.Schema(
    {
      name: String,
    },
    {
      timestamps: true,
    }
  );

  const User = mongoose.model("Users", usersSchema, 'univercity');
  const Formation = mongoose.model("Formations", formationsSchema, 'univercity');

  const Events = mongoose.model("Events", usersSchema, 'univercity');
  const Subjects = mongoose.model("Subjects", subjectsSchema, 'univercity');
  //export const User = mongoose.model("User", userSchema, 'univercity');
module.exports={
    User:User, 
    Formation:Formation,
    Events:Events,
    Subjects:Subjects
};