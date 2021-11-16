import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const handleOnSubmit = e => {
		e.preventDefault();
		console.log(1);
	};

	const navigate = useNavigate();

	return (
		<>
			<div>
				<button onClick={() => navigate('/')}>Home</button>
				<button onClick={() => navigate('/')}>Back</button>
			</div>

			<form onSubmit={handleOnSubmit}>
				<div>
					<label>이름</label>
					<input name="username" type="text" />
				</div>
				<div>
					<label>비밀번호</label>
					<input name="password" type="text" />
				</div>
				<button> 로그인 </button>
			</form>
		</>
	);
}
