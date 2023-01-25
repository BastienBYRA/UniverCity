import { Subjects } from "../config/subjects.config.db.mjs";

export class MongoSubjectsRepository {
  getAll() {
    return new Promise((resolve, reject) => {
      Subjects.find((err, subjects) => {
        if (err) {
          reject(err);
        } else {
          resolve(subjects.map((subject) => subject.toObject()));
        }
      });
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
      Subjects.findOne({ _id: id }, (err, subject) => {
        if (err) {
          reject(err);
        } else {
          resolve(subject.toObject());
        }
      });
    });
  }

  create(name) {
    return new Promise((resolve, reject) => {
      Subjects.create({ name }, (err, subject) => {
        if (err) {
          reject(err);
        } else {
          resolve(subject.toObject());
        }
      });
    });
  }

  update(id, name) {
    return new Promise((resolve, reject) => {
      Subjects.updateOne(
        { _id: id },
        { name },
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
      Subjects.deleteOne({ _id: id }, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
