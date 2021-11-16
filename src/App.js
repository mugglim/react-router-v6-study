import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './Context/AuthContext';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import AuthRoute from './components/AuthRoute';

export default function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route element={<AuthRoute />}>
						<Route path="/profile" element={<Profile />} />
					</Route>
				</Routes>
			</Router>
		</AuthProvider>
	);
}
