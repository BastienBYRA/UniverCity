export class CompaniesController {
    repository;
  
    constructor(repository) {
      this.repository = repository;
    }
  
    listCompanies(req, res) {
      this.repository
        .getAll()
        .then((companies) => {
          res.send({code:200, companies});
        })
        .catch((err) => {
          res.sendStatus(500);
        });
    }

    showAddCompanie(req, res) {
      res.render("editCompanie", { Companie: {} });
    }

    createCompanie(req, res) {
      const { name, description, image, siteLink } = req.body
      this.repository
        .create(name, description, image, siteLink)
        .then((companie) => {
          res.send({code:200, companie});
        })
        .catch((err) => {
          res.sendStatus(500);
        });
    }

    showEditCompanie(req, res) {
      const id = req.params.id;
      this.repository
        .getOne(id)
        .then((companie) => {
          res.render("editCompanie", { companie });
        })
        .catch((err) => {
          res.sendStatus(404);
        });
    }

    getOne(req, res) {
      let id = req.params.id;
      this.repository.getOne(id)
      .then((companie) => {
        res.send({code:200, companie});
      })
      .catch((err) => {
        res.sendStatus(500);
      });
    }
  
    modifyCompanie(req, res) {
      const { name, description, image, siteLink } = req.body;
      const id = req.params.id;
      this.repository
        .update(id, name, description, image, siteLink)
        .then(() => {
          res.sendStatus(200);
        })
        .catch((err) => {
          res.sendStatus(500);
        });
    }
  
    deleteCompanie(req, res) {
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
  