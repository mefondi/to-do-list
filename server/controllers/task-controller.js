const TaskService = require("../service/task-service");

class TaskController {
  async getAll(req, res, next) {
    try {
      const {refreshToken} = req.cookies
      const tasks = await TaskService.getAll(refreshToken);
      return res.json(tasks);
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const {refreshToken} = req.cookies
      const { title, description, date } = req.body;
      const task = await TaskService.create(title, description, date, refreshToken);
      return res.json(task);
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id;
      const {refreshToken} = req.cookies
      const { title, description, date, status } = req.body;
      const task = await TaskService.update(title, description, date, refreshToken, status, id);
      return res.json({ message: "true" });
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const {refreshToken} = req.cookies
      const id = req.params.id;
      const task = await TaskService.remove(id);
      return res.json({ message: "true" });
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new TaskController();
