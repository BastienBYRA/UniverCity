export class EventsController {
    repository;
  
    constructor(repository) {
      this.repository = repository;
    }
  
    showHome(req, res) {
      this.repository
        .getAll()
        .then((events) => {
          res.render("home", { events });
        })
        .catch((err) => {
          console.log("showHome error", err);
          res.sendStatus(500);
        });
    }

    showAddEvent(req, res) {
      res.render("edit", { event: {} });
    }

    createEvent(req, res) {
      const { name, description, dateBegin, dateEnd } = req.body
      this.repository
        .create(name, description, dateBegin, dateEnd)
        .then(() => {
          res.redirect("/api/events");
        })
        .catch((err) => {
          res.render("error", { code: 500, error: err });
        });
    }

    showEditEvent(req, res) {
      const id = req.params.id;
      this.repository
        .getOne(id)
        .then((event) => {
          res.render("edit", { event });
        })
        .catch((err) => {
          res.render("error", { code: 404, error: err });
        });
    }
  
    modifyEvent(req, res) {
      const { name, description, dateBegin, dateEnd } = req.body;
      const id = req.params.id;
  
      this.repository
        .update(id, name, description, dateBegin, dateEnd)
        .then(() => {
          res.redirect("/api/events");
        })
        .catch((err) => {
          res.render("error", { code: 500, error: err });
        });
    }
  
    deleteEvent(req, res) {
      const id = req.params.id;
      this.repository
        .deleteOne(id)
        .then(() => {
          res.redirect("/api/events");
        })
        .catch((err) => {
          res.render("error", { code: 404, error: err });
        });
    }
  }
  