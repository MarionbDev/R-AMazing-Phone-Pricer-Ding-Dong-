const connection = require("../dbConnection");

const getMobiles = (req, res) => {
  const sql = "SELECT id, name, modele, image FROM mobile ORDER BY name DESC";
  connection
    .query(sql)
    .then(([mobiles]) => res.json(mobiles))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getOneMobileById = (req, res) => {
  const idMobile = parseInt(req.params.id, 10);
  if (Number.isNaN(idMobile)) {
    res.sendStatus(404);
  } else {
    const sql = "SELECT id, name, modele, image FROM mobile WHERE id = ?";

    connection
      .query(sql, [idMobile])
      .then(([mobiles]) => {
        if (mobiles.length > 0) {
          res.json(mobiles[0]);
        } else {
          res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const createMobile = (req, res) => {
  const { name, modele, image } = req.body;

  if (!name || !modele) {
    return res.sendStatus(422);
  }

  const sql = "INSERT INTO mobile (name, modele, image) VALUES (?, ?, ?)";

  return connection
    .query(sql, [name, modele, image])
    .then(([result]) => {
      return res.status(201).json({
        id: result.insertId,
        name,
        modele,
        image,
      });
    })
    .catch((err) => {
      console.error(err);
      return res.sendStatus(500);
    });
};

const deleteMobile = (req, res) => {
  const idMobile = parseInt(req.params.id, 10);
  if (Number.isNaN(idMobile)) {
    res.sendStatus(422);
  } else {
    const sql = "DELETE FROM mobile WHERE id = ?";

    connection.query(sql, [idMobile]).then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    });
  }
};

module.exports = {
  getMobiles,
  getOneMobileById,
  createMobile,
  deleteMobile,
};
