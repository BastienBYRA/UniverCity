import { User } from "../config/users.config.db.mjs";

export class MongoUsersRepository {
  getAll() {
    console.log('REPOSITORY');
    return new Promise((resolve, reject) => {
      User.find((err, users) => {
        if (err) {
          reject(err);
        } else {
          resolve(users.map((user) => user.toObject()));
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
