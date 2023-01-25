import { Events } from "../config/events.config.db.mjs";

export class MongoEventsRepository {
  getAll() {
    return new Promise((resolve, reject) => {
      Events.find((err, users) => {
        if (err) {
          reject(err);
        } else {
          resolve(users.map((user) => user.toObject()));
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
    console.log(dateCreation);
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

  /*   getByResearch(search) {
    return new Promise((resolve, reject) => {
      User.find(
        {
          $or: [
            { lastName: { $regex: new RegExp(search, "i") } },
            { firstName: { $regex: new RegExp(search, "i") } },
            { email: { $regex: new RegExp(search, "i") } },
          ],
        },
        (err, users) => {
          if (err) {
            reject(err);
          } else {
            resolve(users.map((user) => user.toObject()));
          }
        }
      );
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
      User.findOne({ _id: id }, (err, user) => {
        if (err) {
          reject(err);
        } else {
          resolve(user.toObject());
        }
      });
    });
  }

  create(firstName, lastName, email) {
    return new Promise((resolve, reject) => {
      User.findOne({ email: email }, (err, user) => {
        if (user) {
          reject("This email is already used.");
        } else {
          User.create({ firstName, lastName, email }, (err, user) => {
            if (err) {
              reject(err);
            } else {
              resolve(user.toObject());
            }
          });
        }
      });
    });
  }

  update(id, firstName, lastName, email) {
    return new Promise((resolve, reject) => {
      User.findOne({ email: email }, (err, user) => {
        if (user) {
          reject("This email is already used.");
        } else {
          User.updateOne(
            { _id: id },
            { firstName, lastName, email },
            (err, user) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            }
          );
        }
      });
    });
  }

  deleteOne(id) {
    return new Promise((resolve, reject) => {
      User.deleteOne({ _id: id }, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  } */
}
