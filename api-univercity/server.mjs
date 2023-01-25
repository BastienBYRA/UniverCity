import express from "express";
import cors from "cors";
import { engine } from "express-handlebars";
import { mongoose } from "mongoose";

import { usersRoutes } from "./routes/users.route.mjs";
import { UsersController } from "./controllers/users.controller.mjs";
import { MongoUsersRepository } from "./repositories/users.repository.mjs";

import { eventsRoutes } from "./routes/events.route.mjs";
import { EventsController } from "./controllers/events.controller.mjs";
import { MongoEventsRepository } from "./repositories/events.repository.mjs";

import { formationsRoutes } from "./routes/formations.route.mjs";
import { FormationsController } from "./controllers/formations.controller.mjs";
import { MongoFormationsRepository } from "./repositories/formations.repository.mjs";

import { subjectsRoutes } from "./routes/subjects.route.mjs";
import { SubjectsController } from "./controllers/subjects.controller.mjs";
import { MongoSubjectsRepository } from "./repositories/subjects.repository.mjs";

import { companiesRoutes } from "./routes/companies.route.mjs";
import {CompaniesController } from "./controllers/companies.controller.mjs";
import { MongoCompaniesRepository } from "./repositories/companies.repository.mjs";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(
  cors({
    origin: "http://localhost:3001", // TODO Mettre à jour le port pour la prod
  })
);

app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.static("assets"));

const eventsRepository = new MongoEventsRepository();
const eventsController = new EventsController(eventsRepository);

const formationsRepository = new MongoFormationsRepository();
const formationsController = new FormationsController(formationsRepository);

const subjectsRepository = new MongoSubjectsRepository();
const subjectsController = new SubjectsController(subjectsRepository);

const usersRepository = new MongoUsersRepository();
const usersController = new UsersController(usersRepository, subjectsRepository);

const companiesRepository = new MongoCompaniesRepository();
const companiesController = new CompaniesController(companiesRepository);

app.use("/api/users", usersRoutes(usersController));
app.use("/api/events", eventsRoutes(eventsController));
app.use("/api/formations", formationsRoutes(formationsController));
app.use("/api/subjects", subjectsRoutes(subjectsController));
app.use("/api/companies", companiesRoutes(companiesController));


mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/univercity", (error) => {
  if (error) throw error;
  console.info("Database successfully connected");
});

app.listen(PORT, () => {
  console.info("Server listening on port", PORT);
});
