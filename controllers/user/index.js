const CreateUserController = require('./create'); 
const UpdateUserController = require('./update');
const DeleteUserController = require('./remove');
const GetUserController = require('./getUser');

module.exports = {
	create: CreateUserController.create,
	update: UpdateUserController.update,
	getUser: GetUserController.getUser,
	remove: DeleteUserController.remove,
	
}

