import express from "express";
import { engine } from "express-handlebars";
import { mongoose, SchemaTypeOptions } from "mongoose";

import { usersRoutes } from "./routes/users.route.mjs";
import { UsersController } from "./controllers/users.controller.mjs";
import { MongoUsersRepository } from "./repositories/users.repository.mjs";

import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

const usersRepository = new MongoUsersRepository();
const usersController = new UsersController(usersRepository);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.static("assets"));

app.use("/api/users", usersRoutes(usersController));

/* app.use('/api/users', usersRoutes(usersController));
app.use('/', pagesRoutes(pagesController)); */

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost:27017/univercity", (error) => {
  if (error) throw error;
  console.info("Database successfully connected");
});

app.listen(PORT, () => {
  console.info("Server listening on port", PORT);
});
