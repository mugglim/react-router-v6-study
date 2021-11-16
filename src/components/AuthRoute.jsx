import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function AuthRoute() {
	const { handleIsAccessTokenExpire } = useAuth();
	const location = useLocation();

	if (handleIsAccessTokenExpire()) {
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return <Outlet />;
}
