import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Profile() {
	const navigate = useNavigate();
	const { user } = useAuth();
	const { userName } = user;

	return (
		<div>
			<button onClick={() => navigate('/')}>Home</button>
			<button onClick={() => navigate(-1)}>Back</button>
			<h1>username : {userName}</h1>
		</div>
	);
}
