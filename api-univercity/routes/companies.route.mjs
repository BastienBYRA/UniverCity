import { Router } from "express";

export const companiesRoutes = (controller) => {
  const router = Router();

  router.get("/", (req, res) => {
    controller.listCompanies(req, res);
  });

  router.get("/add", (req, res) => {
    controller.showAddCompanie(req, res);
  });

  router.get("/get/:id", (req, res) => {
    controller.getOne(req, res);
  });

  router.post("/add", (req, res) => {
    controller.createCompanie(req, res);
  });

  router.get("/edit/:id", (req, res) => {
    controller.showEditCompanie(req, res);
  });

  router.post("/edit/:id", (req, res) => {
    controller.modifyCompanie(req, res);
  });

  router.post("/delete/:id", (req, res) => {
    controller.deleteCompanie(req, res);
  });

  return router;
};
