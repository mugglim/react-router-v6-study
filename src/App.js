import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './Context/AuthContext';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';

export default function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
}
