const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/TaskController");

router.route("/")
  .get(getAllTasks)
  .post(auth, createTask); 

router.route("/:id")
  .get(getTaskById)
  .put(auth, updateTask)
  .delete(auth, deleteTask); 

module.exports = router;
