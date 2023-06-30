/* eslint-disable class-methods-use-this */
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  async passwordCheck(email, userPassword) {
    const password = await this.connection.query(
      `SELECT password FROM ${UserManager.table} WHERE email = ?`,
      [email]
    );
    return this.verifyPassword(userPassword, password[0][0].password);
  }

  insert(user) {
    return this.connection.query(
      `INSERT INTO ${this.table} (name, mail, password) VALUES (?, ?, ?)`,
      [user.name, user.mail, user.password]
    );
  }

  update(user) {
    return this.connection.query(
      `UPDATE ${this.table} SET name = ?, email = ?, password = ?`,
      [user.name, user.mail, user.password]
    );
  }

  find(id) {
    return this.connection.query(
      `SELECT name, email  ${this.table} WHERE id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }

  findByEmail(mail) {
    return this.connection.query(
      `SELECT * FROM  ${this.table} WHERE mail = ?`,
      [mail]
    );
  }
}

module.exports = UserManager;
