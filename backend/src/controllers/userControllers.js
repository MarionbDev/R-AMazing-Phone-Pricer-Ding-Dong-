const argon2 = require("@node-rs/argon2");
const models = require("../models");

// const hashingOptions = {
//   type: argon2.argon2id,
//   memoryCost: 2 ** 16,
//   timeCost: 5,
//   parallelism: 1,
// };

const hashPassword = (userPassword) => {
  return argon2.hash(userPassword);
};

// const verifyPassword = (userPassword, hashedPassword) => {
//   return argon2.verify(hashedPassword, userPassword);
// };

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.status(req.method === "POST" ? 201 : 200).send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// eslint-disable-next-line consistent-return
const add = async (req, res) => {
  const user = req.body;
  // TODO validations (length, format...)

  try {
    const userAlreadyExists = await models.user
      .findByEmail(user.mail)
      .then(([result]) => {
        if (result.length) {
          return true;
        }
        return false;
      });

    if (userAlreadyExists) {
      return res.status(403).send("User with this email already exists");
    }

    const hashedPassword = await hashPassword(user.password);

    models.user
      .insert({ ...user, password: hashedPassword })
      .then(([result]) => {
        return res.status(201).json({ id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        return res.sendStatus(500);
      });
  } catch (err) {
    if (err) {
      return res.status(500).send(err);
    }
  }
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const login = (req, res) => {
  const { mail, password } = req.body;

  models.user
    .findByEmail(mail)
    .then(([users]) => {
      if (users.length === 0) {
        res.status(404).send(`User with email ${mail} not found`);
      } else if (!argon2.verifySync(users[0].password, password)) {
        res.sendStatus(404);
      } else {
        const user = { ...users[0] };
        delete user.hashedPassword;
        res
          .cookie("token", "my super token", {
            httpOnly: true,
            secure: false,
            maxAge: 10000,
          })
          .json(user);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// const hashPassword = (req, res, next) => {
//   const { password } = req.body;
//   if (!password) {
//     res.sendStatus(400);
//   } else {
//     argon2
//       .hash(password, hashingOptions)
//       .then((hashedPassword) => {
//         req.body.hashedPassword = hashedPassword;
//         delete req.body.password;
//         next();
//       })
//       .catch((err) => {
//         console.error(err);
//         res.sendStatus(500);
//       });
//   }
// };

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  login,
  hashPassword,
};
