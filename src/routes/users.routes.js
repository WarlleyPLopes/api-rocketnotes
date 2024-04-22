const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UserController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensuredAuthenticated = require("../middlewares/ensuredAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UserController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensuredAuthenticated, usersController.update);
usersRoutes.patch(
  "/avatar",
  ensuredAuthenticated,
  upload.single("avatar"),
  userAvatarController.update
);

module.exports = usersRoutes;