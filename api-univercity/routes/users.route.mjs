import { Router } from "express";

export const usersRoutes = (controller) => {
  const router = Router();

  router.get("/", (req, res) => {
    controller.listUsers(req, res);
    
  });

  router.get("/add", (req, res) => {
    controller.showAddUser(req, res);
  });

  router.post("/add", (req, res) => {
    controller.createUser(req, res);
  });

  router.post("/get/:id", (req, res) => {
    controller.getOne(req, res);
  });

  router.get("/edit/:id", (req, res) => {
    controller.showEditUser(req, res);
  }); 

  router.post("/edit/:id", (req, res) => {
    controller.modifyUser(req, res);
  });

  router.post("/login", (req, res) => {
    controller.logUser(req, res);
  });

  router.post("/delete/:id", (req, res) => {
    controller.deleteUser(req, res);
  });

  return router;
};

