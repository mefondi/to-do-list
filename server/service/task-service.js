const TaskModel = require("../models/task-model");
const ApiError = require('../exceptions/api-error')

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

    if(!task){
      throw ApiError.BadRequest('Запись не найдена')
    }
    return task;
  }

  async remove(id, user) {
    const result = await TaskModel.deleteOne({ _id: id, user});
    if (!task) {
      throw ApiError.BadRequest('Запись не найдена')
    }
    return result;
  }
}

module.exports = new TaskService();
