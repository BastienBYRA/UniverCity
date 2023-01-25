export class SubjectsController {
    repository;
  
    constructor(repository) {
      this.repository = repository;
    }
  
    showHome(req, res) {
      this.repository
        .getAll()
        .then((subjects) => {
          res.render("home", { subjects });
        })
        .catch((err) => {
          console.log("showHome error", err);
          res.sendStatus(500);
        });
    }

    showAddSubject(req, res) {
      res.render("editSubject", { subject: {} });
    }

    createSubject(req, res) {
      const { name } = req.body
      this.repository
        .create(name)
        .then(() => {
          res.redirect("/api/subjects");
        })
        .catch((err) => {
          console.log("createsubject error", err);
          
          res.render("error", { code: 500, error: err });
        });
    }

    showEditSubject(req, res) {
      const id = req.params.id;
      this.repository
        .getOne(id)
        .then((subject) => {
          res.render("editSubject", { subject });
        })
        .catch((err) => {
          res.render("error", { code: 404, error: err });
        });
    }
  
    modifySubject(req, res) {
      const { name } = req.body;
      const id = req.params.id;
  
      this.repository
        .update(id, name)
        .then(() => {
          res.redirect("/api/subjects");
        })
        .catch((err) => {
          res.render("error", { code: 500, error: err });
        });
    }
  
    deleteSubject(req, res) {
      const id = req.params.id;
      this.repository
        .deleteOne(id)
        .then(() => {
          res.redirect("/api/subjects");
        })
        .catch((err) => {
          res.render("error", { code: 404, error: err });
        });
    }
  }
  