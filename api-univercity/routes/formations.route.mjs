import { Router } from "express";

export const formationsRoutes = (controller) => {
  const router = Router();

  router.get("/", (req, res) => {
    controller.showHome(req, res);
  });

  router.get("/add", (req, res) => {
    controller.showAddFormation(req, res);
  });

  router.get("/get/:id", (req, res) => {
    controller.getOne(req, res);
  });

  router.post("/add", (req, res) => {
    controller.createFormation(req, res);
  });

  router.get("/edit/:id", (req, res) => {
    controller.showEditFormation(req, res);
  });

  router.post("/edit/:id", (req, res) => {
    controller.modifyFormation(req, res);
  });

  router.post("/delete/:id", (req, res) => {
    controller.deleteFormation(req, res);
  });

  return router;
};
