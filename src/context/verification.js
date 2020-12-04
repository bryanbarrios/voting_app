import React, {
	createContext,
	useContext,
	useState,
	useCallback,
	useEffect,
} from 'react';
import * as auth from '../auth-provider';
import { client } from '../utils/api-client';
import { decodeToken } from '../utils/decode-token';

const VerificationContext = createContext();
VerificationContext.displayName = 'VerificationContext';

const VerificationContextProvider = ({ children }) => {
	const [token, setToken] = useState(auth.getToken());

	return (
		<VerificationContext.Provider value={{ token, setToken }}>
			{children}
		</VerificationContext.Provider>
	);
};

const useVerification = () => {
	const { token, setToken } = useContext(VerificationContext);
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [hasErrors, setHasErrors] = useState({ message: '' });

	const verification = useCallback(
		(data) => {
			setIsLoading(true);
			auth
				.verification(data)
				.then(({ token }) => {
					setIsLoading(false);
					setToken(token);
				})
				.catch((error) => {
					setIsLoading(false);
					setHasErrors({ message: error.message });
				});
		},
		[setToken]
	);

	const logout = useCallback(() => {
		auth.logout();
		setUser(null);
	});

	useEffect(() => {
		if (token !== null) {
			setUser(decodeToken(token));
		}
	}, [token]);

	return {
		isVerified: Boolean(token),
		verification,
		isLoading,
		hasErrors,
		user,
		logout
	};
};

const useClient = () => {
	const { token } = useVerification();
	return useCallback(
		(endpoint, config) => client(endpoint, { ...config, token }),
		[token]
	);
};

export { VerificationContextProvider, useVerification, useClient };
