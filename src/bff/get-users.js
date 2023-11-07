export const getUsers = () =>
	fetch('https://localhost:3005/users').then((loadedUsers) => loadedUsers.json());
