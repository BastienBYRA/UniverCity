export class EventsController {
    repository;
  
    constructor(repository) {
      this.repository = repository;
    }
  
    showHome(req, res) {
      this.repository
        .getAll()
        .then((events) => {
          res.send({code:200, events});
        })
        .catch((err) => {
          res.sendStatus(500);
        });
    }

    showAddEvent(req, res) {
      res.render("editEvents", { event: {} });
    }

    createEvent(req, res) {
      const { name, description, dateBegin, dateEnd } = req.body
      this.repository
        .create(name, description, dateBegin, dateEnd)
        .then((event) => {
          res.send({code:200, event});
        })
        .catch((err) => {
          res.sendStatus(500);
        });
    }

    showEditEvent(req, res) {
      const id = req.params.id;
      this.repository
        .getOne(id)
        .then((event) => {
          res.render("editEvents", { event });
        })
        .catch((err) => {
          res.sendStatus(404);
        });
    }

    getOne(req, res) {
      let id = req.params.id;
      this.repository.getOne(id)
      .then((event) => {
        res.send({code:200, event});
      })
      .catch((err) => {
        res.sendStatus(500);
      });
    }
  
    modifyEvent(req, res) {
      const { name, description, dateBegin, dateEnd } = req.body;
      const id = req.params.id;
      this.repository
        .update(id, name, description, dateBegin, dateEnd)
        .then((event) => {
          res.send({code:200, event});
        })
        .catch((err) => {
          res.sendStatus(500);
        });
    }
  
    deleteEvent(req, res) {
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
  