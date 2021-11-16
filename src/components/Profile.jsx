import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
	const navigate = useNavigate();

	return (
		<div>
			<button onClick={() => navigate('/')}>Home</button>
			<button onClick={() => navigate('/')}>Back</button>
			<h1>username</h1>
		</div>
	);
}
