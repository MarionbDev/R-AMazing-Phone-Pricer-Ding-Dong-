const router = require("express").Router();
const userControllers = require("../controllers/userControllers");

router.get("/", userControllers.browse);
router.get("/:id", userControllers.read);
router.put("/:id", userControllers.edit);
router.post(
  "/",
  userControllers.hashPassword,
  userControllers.add,
  userControllers.read
);
router.post("/login", userControllers.login);
router.delete("/:id", userControllers.destroy);

module.exports = router;
