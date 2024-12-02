const UserService = require('../service/user-service')
class UserController {
    async registration(req, res, next) {
        try {
            const {email, password, name} = req.body
            const userData = await UserService.registration(email, password, name)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json(userData)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Ошибка на сервере'})
        }
    }
    async login(req, res, next) {
        try {
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Ошибка на сервере'})
        }
    }
    async logout(req, res, next) {
        try {
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Ошибка на сервере'})
        }
    }
    async activate(req, res, next) {
        try {
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Ошибка на сервере'})
        }
    }
    async refresh(req, res, next) {
        try {
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Ошибка на сервере'})
        }
    }
    async getUsers(req, res, next) {
        try {
            res.json(['132', '123'])
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Ошибка на сервере'})
        }
    }
}

module.exports = new UserController()