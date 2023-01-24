import { Router } from "express";

export const usersRoutes = (controller) => {
  const router = Router();

  router.get("/", (req, res) => {
    console.log('ROUTE');
    controller.showHome(req, res);
  });

  return router;
};

