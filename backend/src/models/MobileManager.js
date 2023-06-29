const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "mobile" });
  }

  insert(mobile) {
    return this.database.query(
      `INSERT INTO ${this.table} (modele, name, image) VALUES (?, ?, ?)`,
      [mobile.modele, mobile.name, mobile.image]
    );
  }

  update(mobile) {
    return this.database.query(
      `UPDATE ${this.table} SET modele = ?,
      name =?, image=?`[(mobile.modele, mobile.name, mobile.image)]
    );
  }

  find(id) {
    return this.database.query(
      `select name, modele  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}  `);
  }
}

module.exports = UserManager;
