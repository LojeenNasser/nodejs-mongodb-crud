const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: { type: String, required: true },
  taskStartDate: { type: Date, required: true },
  taskEndDate: { type: Date, required: true },
  taskTitle: { type: String, default: '' },
  taskBody: { type: String, default: '' },
  taskImage: { type: String, default: '' },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", taskSchema);
