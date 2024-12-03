const TaskModel = require("../models/task-model");
const ApiError = require('../exceptions/api-error')

class TaskService {
  async getAll(refreshToken) {
    const userData = tokenService.validateRefreshToken(refreshToken)
    const tasks = await TaskModel.find({user : userData.id})
    .populate({
        path: 'user',
        model: 'User',
    })
      .exec();
    return tasks;
  }

  async create(title, description, date, refreshToken) {
    const userData = tokenService.validateRefreshToken(refreshToken)
    const newTask = await TaskModel.create({ title, description, date, user : userData.id });
    const task = await newTask.save();
    return task;
  }

  async update(title, description, date, refreshToken, status, id) {
    const userData = tokenService.validateRefreshToken(refreshToken)
    const task = await TaskModel.findOneAndUpdate(
      { _id: id },
      { title, description, date, user : userData.id, status },
      { returnDocument: "after" }
    );

    if(!task){
      throw ApiError.BadRequest('Запись не найдена')
    }
    return task;
  }

  async remove(id, refreshToken) {
    const userData = tokenService.validateRefreshToken(refreshToken)
    const result = await TaskModel.deleteOne({ _id: id, user: userData.id });
    if (!task) {
      throw ApiError.BadRequest('Запись не найдена')
    }
    return result;
  }
}

module.exports = new TaskService();
