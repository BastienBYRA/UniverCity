import { Router } from "express";

export const subjectsRoutes = (controller) => {
  const router = Router();

  router.get("/", (req, res) => {
    controller.listSubjects(req, res);
  });

  router.get("/add", (req, res) => {
    controller.showAddSubject(req, res);
  });

  router.get("/get/:id", (req, res) => {
    controller.getOne(req, res);
  });

  router.post("/add", (req, res) => {
    controller.createSubject(req, res);
  });

  router.get("/edit/:id", (req, res) => {
    controller.showEditSubject(req, res);
  });

  router.post("/edit/:id", (req, res) => {
    controller.modifySubject(req, res);
  });

  router.post("/delete/:id", (req, res) => {
    controller.deleteSubject(req, res);
  });

  return router;
};
