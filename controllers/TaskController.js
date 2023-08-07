const Joi = require("joi");
const taskService = require("../services/TaskService");

const taskSchema = Joi.object({
  taskTitle: Joi.string(),
  taskName: Joi.string().required(),
  taskStartDate: Joi.date().iso().required(),
  taskEndDate: Joi.date().iso().required(),
  taskBody: Joi.string(),
  taskImage: Joi.string(),
});

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    return res.json({ data: tasks, status: "success" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { error } = taskSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const task = await taskService.createTask(req.body);
    return res.json({ data: task, status: "success" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    return res.json({ data: task, status: "success" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { error } = taskSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const task = await taskService.updateTask(req.params.id, req.body);
    return res.json({ data: task, status: "success" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await taskService.deleteTask(req.params.id);
    return res.json({ data: task, status: "success" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
