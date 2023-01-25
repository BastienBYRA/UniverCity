import { Router } from "express";

export const usersRoutes = (controller) => {
  const router = Router();

  router.get("/", (req, res) => {
    console.log('ROUTE');
    controller.showHome(req, res);
  });

  router.get("/add", (req, res) => {
    controller.showAddUser(req, res);
  });

  router.post("/add", (req, res) => {
    controller.createUser(req, res);
  });

  return router;
};

