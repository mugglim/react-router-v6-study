import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>
			<Link to="/profile">Profile</Link>
		</div>
	);
}
