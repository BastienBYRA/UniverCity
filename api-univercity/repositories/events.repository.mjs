import { Events } from "../config/events.config.db.mjs";

export class MongoEventsRepository {
  getAll() {
    return new Promise((resolve, reject) => {
      Events.find((err, events) => {
        if (err) {
          reject(err);
        } else {
          resolve(events.map((event) => event.toObject()));
        }
      });
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
      Events.findOne({ _id: id }, (err, event) => {
        if (err) {
          reject(err);
        } else {
          resolve(event.toObject());
        }
      });
    });
  }

  create(name, description, dateBegin, dateEnd) {
    let dateCreation = new Date().toISOString().split('T')[0];
    return new Promise((resolve, reject) => {
      Events.create({ name, description, dateCreation, dateBegin, dateEnd }, (err, event) => {
        if (err) {
          reject(err);
        } else {
          resolve(event.toObject());
        }
      });
    });
  }

  update(id, name, description, dateBegin, dateEnd) {
    

    return new Promise((resolve, reject) => {
      Events.updateOne(
        { _id: id },
        { name, description, dateBegin, dateEnd },
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  deleteOne(id) {
    return new Promise((resolve, reject) => {
      Events.deleteOne({ _id: id }, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
