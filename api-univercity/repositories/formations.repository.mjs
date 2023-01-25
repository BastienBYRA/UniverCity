import { Formations } from "../config/formations.config.db.mjs";

export class MongoFormationsRepository {
  getAll() {
    return new Promise((resolve, reject) => {
      Formations.find((err, formations) => {
        if (err) {
          reject(err);
        } else {
          resolve(formations.map((formation) => formation.toObject()));
        }
      });
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
      Formations.findOne({ _id: id }, (err, formation) => {
        if (err) {
          reject(err);
        } else {
          if (formation) {
            resolve(formation.toObject());
          } else {
            reject();
          }
        }
      });
    });
  }

  create(title, img, desc, descShort, duration, niveau, numMaxPersons) {
    return new Promise((resolve, reject) => {
      Formations.create(
        { title, img, desc, descShort, duration, niveau, numMaxPersons },
        (err, formation) => {
          if (err) {
            reject(err);
          } else {
            resolve(formation.toObject());
          }
        }
      );
    });
  }

  update(id, title, img, desc, descShort, duration, niveau, numMaxPersons) {
    return new Promise((resolve, reject) => {
      Formations.updateOne(
        { _id: id },
        { title, img, desc, descShort, duration, niveau, numMaxPersons },
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
      Formations.deleteOne({ _id: id }, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
