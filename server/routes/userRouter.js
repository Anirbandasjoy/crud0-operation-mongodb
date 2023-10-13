const express = require("express");
const { createUser } = require("../controller/userController");
const userRouter = express.Router();

const userRoutes = (userCollection) => {
  userRouter.post("/users", createUser(userCollection));

  return userRouter;
};

module.exports = userRoutes;
