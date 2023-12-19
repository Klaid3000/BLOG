import { getUsers } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const fetchUsers = async (hash) => {
	const accessRoles = [ROLE.ADMIN];

	const acess = await sessions.access(hash, accessRoles);

	if (!acess) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	const users = await getUsers();

	return {
		error: null,
		res: users,
	};
};
