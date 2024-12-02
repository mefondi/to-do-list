const TaskModel = require("../models/task-model");

class TaskService {
  async getAll(user) {
    const tasks = await TaskModel.find({user})
    .populate({
        path: 'user',
        model: 'User',
    })
      .exec();
    return tasks;
  }

  async create(title, description, date, user) {
    const newTask = await TaskModel.create({ title, description, date, user });
    const task = await newTask.save();
    return task;
  }

  async update(title, description, date, user, status, id) {
    const task = await TaskModel.findOneAndUpdate(
      { _id: id },
      { title, description, date, user, status },
      { returnDocument: "after" }
    );
    return task;
  }

  async remove(id) {
    const task = await TaskModel.findOneAndDelete({ _id: id });
    return task;
  }
}

module.exports = new TaskService();
