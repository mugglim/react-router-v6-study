import { createContext } from 'react';
import useProvideAuth from '../hooks/useProvideAuth';

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
	const auth = useProvideAuth();
	return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { AuthContext };
