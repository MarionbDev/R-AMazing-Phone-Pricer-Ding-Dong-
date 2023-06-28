const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, hashedPassword, role_id) VALUES (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
        user.role_id,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?,
      lastname =?,
      email = ?,
      password = ?,
      role_id = ?`,

      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
        user.role_id,
      ]
    );
  }

  find(id) {
    return this.database.query(
      `select firstname, lastname, email, role_id from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT u.id, u.firstname, u.lastname, u.email, u.role_id AS role_id, r.name FROM ${this.table} AS u JOIN role AS r ON r.id = u.role_id `
    );
  }

  findByEmail(email) {
    return this.database.query(`SELECT * FROM  ${this.table} WHERE email=?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
