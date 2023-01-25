export class UsersController {
  usersRepository;
  subjectsRepository;

  constructor(usersRepository, subjectsRepository) {
    this.usersRepository = usersRepository;
    this.subjectsRepository = subjectsRepository;
  }

  showHome(req, res) {
    this.usersRepository
      .getAll()
      .then((users) => {
        res.render("home", { users });
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  }

  showAddUser(req, res) {
    this.subjectsRepository.getAll().then((subjectsForUser) => {
      res.render("edit", { user: {}, subjectsForUser });
    });
  }

  createUser(req, res) {
    const {
      email,
      lastName,
      firstName,
      login,
      password,
      mobile,
      INE,
      subjects,
    } = req.body;
    this.usersRepository
      .create(
        email,
        lastName,
        firstName,
        login,
        password,
        mobile,
        INE,
        subjects
      )
      .then(() => {
        res.redirect("/api/users");
      })
      .catch((err) => {
        console.log("createuser error", err);

        res.render("error", { code: 500, error: err });
      });
  }

  showEditUser(req, res) {
    const id = req.params.id;
    let subjectsForUser = [];
    this.subjectsRepository
      .getAll()
      .then((_subjectsForUser) => {
        subjectsForUser = _subjectsForUser;
      })
      .then(() => {
        this.usersRepository
          .getOne(id)
          .then((user) => {
            res.render("edit", { user, subjectsForUser });
          })
          .catch((err) => {
            res.render("error", { code: 404, error: err });
          });
      })
      .catch((err) => {});
  }

  modifyUser(req, res) {
    const {
      email,
      lastName,
      firstName,
      login,
      password,
      mobile,
      INE,
      subjects,
    } = req.body;
    const id = req.params.id;

    this.usersRepository
      .update(
        id,
        email,
        lastName,
        firstName,
        login,
        password,
        mobile,
        INE,
        subjects
      )
      .then(() => {
        res.redirect("/api/users");
      })
      .catch((err) => {
        console.log("createuser error", err);
        res.render("error", { code: 500, error: err });
      });
  }

  deleteUser(req, res) {
    const id = req.params.id;
    this.usersRepository
      .deleteOne(id)
      .then(() => {
        res.redirect("/api/users");
      })
      .catch((err) => {
        res.render("error", { code: 404, error: err });
      });
  }
}
