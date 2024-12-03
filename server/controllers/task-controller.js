const TaskService = require("../service/task-service");

class TaskController {
  async getAll(req, res, next) {
    try {
      const user = req.user.id
      const tasks = await TaskService.getAll(user);
      return res.json(tasks);
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const user = req.user.id
      const { title, description, date } = req.body;
      const task = await TaskService.create(title, description, date, user);
      return res.json(task);
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id;
      const user = req.user.id
      const { title, description, date, status } = req.body;
      const task = await TaskService.update(title, description, date, user, status, id);
      return res.json({ message: "true" });
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const user = req.user.id
      const id = req.params.id;
      const task = await TaskService.remove(id, user);
      return res.json({ message: "true" });
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new TaskController();
