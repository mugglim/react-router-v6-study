import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function LogoutBtn() {
	const { handleLogout } = useAuth();
	const navigate = useNavigate();

	const handleOnClick = () => {
		handleLogout(() => navigate('/'));
	};

	return <button onClick={handleOnClick}>logout</button>;
}
