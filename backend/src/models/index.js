const router = require("express").Router();

const userRouter = require("../routes/users.routes");

router.use("/users", userRouter);

module.exports = router;
