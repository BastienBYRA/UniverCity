export class UsersController {
    repository;
  
    constructor(repository) {
      this.repository = repository;
    }
  
    showHome(req, res) {
      console.log('CONTROLLER');
      this.repository
        .getAll()
        .then((users) => {
          res.render("home", { users });
        })
        .catch((err) => {
          console.log("showHome error", err);
          res.sendStatus(500);
        });
    }

    showAddUser(req, res) {
      res.render("edit", { user: {} });
    }
  }
  