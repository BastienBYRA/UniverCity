import { Router } from "express";

export const eventsRoutes = (controller) => {
  const router = Router();

  router.get("/", (req, res) => {
    controller.showHome(req, res);
  });

  router.get("/add", (req, res) => {
    controller.showAddEvent(req, res);
  });

  router.get("/get/:id", (req, res) => {
    controller.getOne(req, res);
  });

  router.post("/add", (req, res) => {
    controller.createEvent(req, res);
  });

  router.get("/edit/:id", (req, res) => {
    controller.showEditEvent(req, res);
  });

  router.post("/edit/:id", (req, res) => {
    controller.modifyEvent(req, res);
  });

  router.post("/delete/:id", (req, res) => {
    controller.deleteEvent(req, res);
  });

  return router;
};
