import { deleteUser } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const removeUser = async (hash, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN];

	const acess = await sessions.access(hash, accessRoles);

	if (!acess) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	deleteUser(userId);

	return {
		error: null,
		res: true,
	};
};
