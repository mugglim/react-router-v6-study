import { useState } from 'react';
import { DB } from '../loginDB';

export default function AuthProvider() {
	const [user, setUser] = useState(null);

	const handleLoginValidation = ({ userName, password }) => {
		return DB[userName] && password === DB[userName].password;
	};

	const handleLogin = ({ userName, password }) => {
		const isLoginValidation = handleLoginValidation({ userName, password });
		if (isLoginValidation) {
			localStorage.setItem('accessToken', Date.now() + 1000 * 10);
			setUser({ userName });
		}
	};

	const handleLogout = () => {
		localStorage.removeItem('accessToken');
	};

	return { user, handleLogin, handleLogout };
}
