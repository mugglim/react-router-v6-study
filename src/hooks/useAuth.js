import { useContext } from 'react';
import AuthContext from '../Context/AuthContext';

export default function useAuth() {
	return useContext(AuthContext);
}
