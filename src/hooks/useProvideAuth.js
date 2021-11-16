import { useState } from 'react';
import { DB } from '../loginDB';

export default function AuthProvider() {
	const [user, setUser] = useState(null);

	const handleLoginValidation = ({ userName, password }) => {
		return DB[userName] && password === DB[userName].password;
	};

	const handleLogin = ({ userName, password }, done) => {
		const isLoginValidation = handleLoginValidation({ userName, password });
		if (isLoginValidation) {
			localStorage.setItem('accessToken', Date.now() + 1000 * 10);
			setUser({ userName });
			done();
		} else {
			console.log('올바르지 않은 로그인 정보입니다');
		}
	};

	const handleLogout = done => {
		localStorage.removeItem('accessToken');
		done();
	};

	return { user, handleLogin, handleLogout };
}
