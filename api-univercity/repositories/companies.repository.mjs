import { Companies } from "../config/Companies.config.db.mjs";

export class MongoCompaniesRepository {
  getAll() {
    return new Promise((resolve, reject) => {
      Companies.find((err, companies) => {
        if (err) {
          reject(err);
        } else {
          resolve(companies.map((companie) => companie.toObject()));
        }
      });
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
      Companies.findOne({ _id: id }, (err, companie) => {
        if (err) {
          reject(err);
        } else {
          resolve(companie.toObject());
        }
      });
    });
  }

  create(name, description, image, siteLink) {
    return new Promise((resolve, reject) => {
      Companies.create({ name, description, image, siteLink }, (err, companie) => {
        if (err) {
          reject(err);
        } else {
          resolve(companie.toObject());
        }
      });
    });
  }

  update(id, name, description, image, siteLink) {
    return new Promise((resolve, reject) => {
      Companies.updateOne(
        { _id: id },
        { name, description, image, siteLink },
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
      Companies.deleteOne({ _id: id }, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
