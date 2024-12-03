const {body} = require('express-validator')

module.exports = registerVal = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Неверный формат пароля минимум 5 символов').isLength({min:5}),
    body('name', 'Неверный формат имени минимум 2 символа').isLength({min:2}),
]
