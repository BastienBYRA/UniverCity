export class FormationsController {
    repository;
  
    constructor(repository) {
      this.repository = repository;
    }
  
    showHome(req, res) {
      this.repository
        .getAll()
        .then((formations) => {
          res.render("home", { formations });
        })
        .catch((err) => {
          console.log("showHome error", err);
          res.sendStatus(500);
        });
    }

    showAddFormation(req, res) {
      res.render("edit", { formation: {} });
    }

    createFormation(req, res) {
      console.log('HHHHHHHHHHHHHHHHAAAAAAAAAAAAAAAAAAAAA');
      
      const { name, duration, description, eduLevelAfter, numMAxPersons, image } = req.body
      this.repository
        .create(name, duration, description, eduLevelAfter, numMAxPersons, image)
        .then(() => {
          res.redirect("/api/formations");
        })
        .catch((err) => {
          console.log("createFormation error", err);
          
          res.render("error", { code: 500, error: err });
        });
    }

    showEditFormation(req, res) {
      const id = req.params.id;
      this.repository
        .getOne(id)
        .then((formation) => {
          res.render("edit", { formation });
        })
        .catch((err) => {
          res.render("error", { code: 404, error: err });
        });
    }
  
    modifyFormation(req, res) {
      const { name, duration, description, eduLevelAfter, numMAxPersons, image } = req.body;
      const id = req.params.id;
  
      this.repository
        .update(id, name, duration, description, eduLevelAfter, numMAxPersons, image)
        .then(() => {
          res.redirect("/api/formations");
        })
        .catch((err) => {
          console.log("createFormation error", err);
          res.render("error", { code: 500, error: err });
        });
    }
  
    deleteFormation(req, res) {
      const id = req.params.id;
      console.log('del', id)
      this.repository
        .deleteOne(id)
        .then(() => {
          res.redirect("/api/formations");
        })
        .catch((err) => {
          res.render("error", { code: 404, error: err });
        });
    }
  }
  