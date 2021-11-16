import { useState } from 'react';
import { DB } from '../loginDB';

export default function AuthProvider() {
	const [user, setUser] = useState(null);

	const handleLoginValidation = ({ userName, password }) => {
		return DB[userName] && password === DB[userName].password;
	};

	const handleIsAccessTokenExpire = () => {
		const accessTokenExpireTime = parseInt(localStorage.getItem('accessToken'));

		if (!accessTokenExpireTime) return true;

		return Date.now() - accessTokenExpireTime > 0;
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
		return done;
	};

	return { user, handleLogin, handleLogout, handleIsAccessTokenExpire };
}
