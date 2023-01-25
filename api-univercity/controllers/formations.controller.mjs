export class FormationsController {
    repository;
  
    constructor(repository) {
      this.repository = repository;
    }
  
    showHome(req, res) {
      this.repository
        .getAll()
        .then((formations) => {
          res.send({code:200, formations});
        })
        .catch((err) => {
          res.sendStatus(500);
        });
    }

    getOne(req, res) {
      let id = req.params.id;
      this.repository.getOne(id)
      .then((formation) => {
        res.send({code:200, formation});
      })
      .catch((err) => {
        res.sendStatus(500);
      });
    }

    showAddFormation(req, res) {
      res.render("editFormation", { formation: {} });
    }

    createFormation(req, res) {
      const { name, duration, description, eduLevelAfter, numMAxPersons, image } = req.body
      this.repository
        .create(name, duration, description, eduLevelAfter, numMAxPersons, image)
        .then((formation) => {
          res.send({code:200, formation})
        })
        .catch((err) => {
          res.sendStatus(500);
        });
    }

    showEditFormation(req, res) {
      const id = req.params.id;
      this.repository
        .getOne(id)
        .then((formation) => {
          res.render("editFormation", { formation });
        })
        .catch((err) => {
          res.sendStatus(404);
        });
    }
  
    modifyFormation(req, res) {
      const { name, duration, description, eduLevelAfter, numMAxPersons, image } = req.body;
      const id = req.params.id;
  
      this.repository
        .update(id, name, duration, description, eduLevelAfter, numMAxPersons, image)
        .then((formation) => {
          res.send(code = 200, formation);
        })
        .catch((err) => {
          res.sendStatus(500);
        });
    }
  
    deleteFormation(req, res) {
      const id = req.params.id;
      this.repository
        .deleteOne(id)
        .then(() => {
          res.sendStatus(200);
        })
        .catch((err) => {
          res.sendStatus(500);
        });
    }
  }
  