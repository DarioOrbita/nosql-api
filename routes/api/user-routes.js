const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");
const { create } = require("../../models/User");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;