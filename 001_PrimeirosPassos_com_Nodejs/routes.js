const UserController = require('./controllers/UserConttoler')

module.exports = [
    {
        endPoint: '/users',
        method: 'GET',
        handler: UserController.listUsers,
    },
    {
        endPoint: '/users/:id',
        method: 'GET',
        handler: UserController.getUserById,
    },
    {
        endPoint: '/users',
        method: 'POST',
        handler: UserController.createUser,
    },
    {
        endPoint: '/users/:id',
        method: 'PUT',
        handler: UserController.updateUser,
    },
    {
        endPoint: '/users/:id',
        method: 'DELETE',
        handler: UserController.deleteUser,
    },
    
]