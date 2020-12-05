const UserController = require('./controllers/UserConttoler')

module.exports = [
    {
        endPoint: '/users',
        method: 'GET',
        handler: UserController.listUsers,
    },
    {
        endPoint: '/produtos',
        method: 'GET',
        handler: UserController.listUsers,
    },
    
]