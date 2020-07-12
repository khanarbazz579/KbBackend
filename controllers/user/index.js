const CreateUserController = require('./create'); 
const UpdateUserController = require('./update');
const DeleteUserController = require('./remove');
const GetUserController = require('./getUser');
const loginController = require('./login');

module.exports = {
	create: CreateUserController.save,
	update: UpdateUserController.update,
	getUser: GetUserController.getUser,
	remove: DeleteUserController.remove,
	login: loginController.login
	
}

