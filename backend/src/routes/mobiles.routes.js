const router = require("express").Router();

const mobileControllers = require("../controllers/mobileControllers");

router.get("/", mobileControllers.getMobiles);
router.get("/:id", mobileControllers.getOneMobileById);
// router.put("/:id", mobileControllers.edit);
router.post("/", mobileControllers.createMobile);
router.delete("/:id", mobileControllers.deleteMobile);

module.exports = router;
