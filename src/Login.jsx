import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DB } from './loginDB';

export default function Login() {
	const navigate = useNavigate();
	const userNameRef = useRef();
	const passwordRef = useRef();

	const handleOnSubmit = e => {
		e.preventDefault();
		const userName = userNameRef.current.value;
		const password = passwordRef.current.value;
		const isLoginValidation = handleLoginValidation({ userName, password });

		if (isLoginValidation) {
			// 10초의 Expire 주입
			localStorage.setItem('accessToken', Date.now() + 1000 * 10);
		}
	};

	const handleLoginValidation = ({ userName, password }) => {
		return DB[userName] && password === DB[userName].password;
	};

	return (
		<>
			<div>
				<button onClick={() => navigate('/')}>Home</button>
				<button onClick={() => navigate('/')}>Back</button>
			</div>

			<form onSubmit={handleOnSubmit}>
				<div>
					<label>username</label>
					<input ref={userNameRef} name="username" type="text" />
				</div>
				<div>
					<label>password</label>
					<input ref={passwordRef} name="password" type="text" />
				</div>
				<button> 로그인 </button>
			</form>
		</>
	);
}
