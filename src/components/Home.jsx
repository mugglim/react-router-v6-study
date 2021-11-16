import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LogoutBtn from './LogoutBtn';

export default function Home() {
	const { user } = useAuth();
	console.log(user);
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/profile">Profile</Link>
			{!user ? <Link to="/login">Login</Link> : <LogoutBtn />}
		</div>
	);
}
