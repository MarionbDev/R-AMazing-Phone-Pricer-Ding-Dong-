const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (name, email, hashedPassword) VALUES (?, ?, ?)`,
      [user.name, user.email, user.hashedPassword]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?,
      name =?,
      email = ?,
      hashedPassword = ?`,

      [user.name, user.email, user.hashedPassword]
    );
  }

  find(id) {
    return this.database.query(
      `select name, email  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}  `);
  }

  findByEmail(email) {
    return this.database.query(`SELECT * FROM  ${this.table} WHERE email=?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
