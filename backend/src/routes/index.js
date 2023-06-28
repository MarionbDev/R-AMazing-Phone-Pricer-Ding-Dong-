const router = require("express").Router();

const userRouter = require("./users.routes");
const mobileRouter = require("./mobiles.routes");

router.use("/users", userRouter);
router.use("/mobiles", mobileRouter);

module.exports = router;
