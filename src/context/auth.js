import React, { createContext, useContext, useState, useCallback } from 'react';
import * as auth from '../auth_provider';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

const AuthContextProvider = ({ children }) => {
	const [authenticationId, setAuthenticationId] = useState(
		auth.getAuthenticationId()
	);

	return (
		<AuthContext.Provider value={{ authenticationId, setAuthenticationId }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {	
	const { authenticationId, setAuthenticationId } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(false);
	const [hasErrors, setHasErrors] = useState(false);

	const login =	 useCallback(
		(data) => {
			setIsLoading(true);
			auth
				.login(data)
				.then((data) => {
					setIsLoading(false);
					setAuthenticationId(data);
				})
				.catch(() => {
					setIsLoading(false);
					setHasErrors(true);
				});
		},
		[setAuthenticationId]
	);

	return {
		isAuthenticated: Boolean(authenticationId),
		login,
		isLoading,
		hasErrors,
		authenticationId
	};
};

export { AuthContextProvider, useAuth };
