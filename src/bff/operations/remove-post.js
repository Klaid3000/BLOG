import { deleteComment, deletePost, getComments } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const removePost = async (hash, id) => {
	const accessRoles = [ROLE.ADMIN];

	const acess = await sessions.access(hash, accessRoles);

	if (!acess) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	await deletePost(id);

	const comments = await getComments(id);

	await Promise.all(comments.map(({ id: commentId }) => deleteComment(commentId)));

	return {
		error: null,
		res: true,
	};
};
