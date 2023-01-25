import { User } from "../config/users.config.db.mjs";

export class MongoUsersRepository {
  getAll() {
    return new Promise((resolve, reject) => {
      User.aggregate(
        [
          {
            $lookup: {
              from: "subjects",
              localField: "subjects",
              foreignField: "_id",
              as: "subjects",
            },
          },
        ],
        (err, users) => {
          if (err) {
            reject(err);
          } else {
            resolve(users.map((user) => user));
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

  checkLogin(email) {
    return new Promise((resolve, reject) => {
      User.findOne({ email }, (err, user) => {
        if (err) {
          reject(err);
        } else {
          resolve(user.toObject());
        }
      });
    });
  }

  create(email, lastName, firstName, password, mobile, INE, subjects) {
    return new Promise((resolve, reject) => {
      User.findOne({ email: email }, (err, user) => {
        if (user) {
          reject("This email is already used.");
        } else {
          User.create(
            {
              email,
              lastName,
              firstName,
              password,
              mobile,
              INE,
              subjects,
            },
            (err, user) => {
              if (err) {
                reject(err);
              } else {
                resolve(user.toObject());
              }
            }
          );
        }
      });
    });
  }

  update(id, email, lastName, firstName, password, mobile, INE, subjects) {
    return new Promise((resolve, reject) => {
      User.find({ email: email, '_id': {$ne : id}}, (err, user) => {
        if (user[0] != null) {
          reject("This email is already used.");
        } else {
          User.updateOne(
            { _id: id },
            { email, lastName, firstName, password, mobile, INE, subjects },
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
  }
}
