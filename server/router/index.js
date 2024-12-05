const Router = require('express').Router
const UserController = require('../controllers/user-controller')
const TaskController = require('../controllers/task-controller')
const router = new Router()
const registerVal = require('../validation/auth')
const handelValError = require('../utils/handelValError')
const authMiddleware = require('../middlewares/auth-middleware')

router.post('/registration', registerVal, handelValError, UserController.registration)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:link', UserController.activate)
router.get('/refresh', UserController.refresh)

router.post('/tasks',authMiddleware, TaskController.create)
router.get('/tasks',authMiddleware, TaskController.getAll)
router.patch('/tasks/:id',authMiddleware, TaskController.update)
router.delete('/tasks/:id',authMiddleware, TaskController.remove)

module.exports = router