const TaskService = require("../service/task-service");

class TaskController {
  async getAll(req, res, next) {
    try {
        const user = req.params.id;
      const tasks = await TaskService.getAll(user);
      return res.json(tasks);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Ошибка на сервере" });
    }
  }

  async create(req, res, next) {
    try {
      const { title, description, date, user } = req.body;
      const task = await TaskService.create(title, description, date, user);
      return res.json(task);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Ошибка на сервере" });
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id;
      const { title, description, date, user, status } = req.body;
      const task = await TaskService.update(title, description, date, user, status, id);
      if (!task) {
        console.log(task);
        return res.status(404).json({ message: "Задача не найдена" });
      }
      return res.json({ message: "true" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Ошибка на сервере" });
    }
  }

  async remove(req, res, next) {
    try {
      const id = req.params.id;
      const task = await TaskService.remove(id);
      if (!task) {
        console.log(task);
        return res.status(404).json({ message: "Задача не найдена" });
      }
      return res.json({ message: "true" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Ошибка на сервере" });
    }
  }
}

module.exports = new TaskController();
