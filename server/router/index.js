const Router = require('express').Router
const UserController = require('../controllers/user-controller')
const TaskController = require('../controllers/task-controller')
const router = new Router()

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:link', UserController.activate)
router.get('/refresh', UserController.refresh)
router.get('/users', UserController.getUsers)

router.post('/tasks', TaskController.create)
router.get('/tasks/:id', TaskController.getAll)
router.patch('/tasks/:id', TaskController.update)
router.delete('/tasks/:id', TaskController.remove)

module.exports = router