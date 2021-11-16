import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Login() {
	const navigate = useNavigate();
	const { handleLogin } = useAuth();

	const userNameRef = useRef();
	const passwordRef = useRef();

	const handleOnSubmit = e => {
		e.preventDefault();
		const userName = userNameRef.current.value;
		const password = passwordRef.current.value;
		handleLogin({ userName, password }, () => navigate('/'));
	};

	return (
		<>
			<div>
				<button onClick={() => navigate('/')}>Home</button>
				<button onClick={() => navigate(-1)}>Back</button>
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
