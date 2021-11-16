import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/profile">Profile</Link>

				<Routes>
					<Route path="/login" element={<div>Login?</div>} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
