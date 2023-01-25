import bcrypt from "bcrypt";
import { User } from "../config/users.config.db.mjs";

export class UsersController {
  usersRepository;
  subjectsRepository;

  constructor(usersRepository, subjectsRepository) {
    this.usersRepository = usersRepository;
    this.subjectsRepository = subjectsRepository;
  }

  listUsers(req, res) {
    this.usersRepository
      .getAll()
      .then((users) => {
        res.send({ code: 200, users });
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  }

  getOne(req, res) {
    let id = req.params.id;
    this.repository
      .getOne(id)
      .then((formation) => {
        res.send({ code: 200, formation });
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  }

  showAddUser(req, res) {
    this.subjectsRepository.getAll().then((subjectsForUser) => {
      res.render("editUser", { user: {}, subjectsForUser });
    });
  }

  createUser(req, res) {
    const { email, lastName, firstName, password, mobile, INE, subjects } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt).then((hash) => {
        this.usersRepository
          .create(email, lastName, firstName, hash, mobile, INE, subjects)
          .then((user) => {
            res.send({ user });
          })
          .catch((err) => {
            res.send({ code: 500, msg: err });
          });
      });
    });
  }

  /**
   * Permet de retourner l'utilisateur en fonction des ses login et mot de passe
   * @param {Requete html} req
   * @param {Réponse html} res
   */
  logUser(req, res) {
    const { email, password } = req.body;
    console.log(email, password);

    this.usersRepository
      .checkLogin(email, password)
      .then((user) => {
        bcrypt.compare(password, user.password, function (err, result) {
          if (result) {
            res.send({ code: 200, user });
          } else {
            res.send({ msg: "Login ou mot de passe incorrect" });
          }
        });
      })
      .catch((err) => {
        res.sendStatus(500);
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
            res.render("editUser", { user, subjectsForUser });
          })
          .catch((err) => {
            res.render("error", { code: 404, error: err });
          });
      })
      .catch((err) => {});
  }

  modifyUser(req, res) {
    const { email, lastName, firstName, mobile, INE, subjects } = req.body;
    const id = req.params.id;

    this.usersRepository
      .update(id, email, lastName, firstName, mobile, INE, subjects)
      .then((user) => {
        console.log(user);

        res.send({ code: 200, user });
      })
      .catch((err) => {
        res.send({ code: 500, msg: err });
      });
  }

  deleteUser(req, res) {
    const id = req.params.id;
    this.usersRepository
      .deleteOne(id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  }
}
