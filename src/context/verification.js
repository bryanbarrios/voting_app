import React, { createContext, useContext, useState, useCallback } from 'react';
import * as auth from '../auth_provider';

const VerificationContext = createContext();
VerificationContext.displayName = 'VerificationContext';

const VerificationContextProvider = ({ children }) => {
	const [token, setToken] = useState(null);

	return (
		<VerificationContext.Provider value={{ token, setToken }}>
			{children}
		</VerificationContext.Provider>
	);
};

const useVerification = () => {
	const { token, setToken } = useContext(VerificationContext);
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

	return {
		isVerified: Boolean(token),
		verification,
		isLoading,
		hasErrors,
	};
};

export { VerificationContextProvider, useVerification };
