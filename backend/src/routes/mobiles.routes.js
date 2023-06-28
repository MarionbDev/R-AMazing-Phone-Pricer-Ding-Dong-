const router = require("express").Router();

const mobileControllers = require("../controllers/mobileControllers");

router.get("/", mobileControllers.browse);
router.get("/:id", mobileControllers.read);
router.put("/:id", mobileControllers.edit);
router.post("/", mobileControllers.add);
router.delete("/:id", mobileControllers.destroy);

module.exports = router;
