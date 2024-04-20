const { Router } = require("express");

const UserController = require("../controllers/UsersController");
const ensuredAuthenticated = require("../middlewares/ensuredAuthenticated")

const usersRoutes = Router();

const usersController = new UserController()

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensuredAuthenticated, usersController.update)

module.exports = usersRoutes;
