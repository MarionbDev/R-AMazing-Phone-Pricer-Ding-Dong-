const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "mobile" });
  }

  insert(mobile) {
    return this.database.query(
      `INSERT INTO ${this.table} (model, name) VALUES (?, ?)`,
      [mobile.model, mobile.name]
    );
  }

  update(mobile) {
    return this.database.query(
      `UPDATE ${this.table} SET model = ?,
      name =?`,

      [mobile.model, mobile.name]
    );
  }

  find(id) {
    return this.database.query(
      `select name, model  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}  `);
  }
}

module.exports = UserManager;
