const TaskModel = require("../models/Task");

exports.getAllTasks = async () => {
  try {
    return await TaskModel.find();
  } catch (error) {
    throw new Error("Error fetching tasks: " + error.message);
  }
};

exports.createTask = async (task) => {
  try {
    return await TaskModel.create(task);
  } catch (error) {
    throw new Error("Error creating task: " + error.message);
  }
};

exports.getTaskById = async (id) => {
  try {
    return await TaskModel.findById(id);
  } catch (error) {
    throw new Error("Error fetching task by ID: " + error.message);
  }
};

exports.updateTask = async (id, task) => {
  try {
    return await TaskModel.findByIdAndUpdate(id, task);
  } catch (error) {
    throw new Error("Error updating task: " + error.message);
  }
};

exports.deleteTask = async (id) => {
  try {
    return await TaskModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error deleting task: " + error.message);
  }
};
