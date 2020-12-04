import React from 'react';
import { AuthContextProvider } from './context/auth';
import { VerificationContextProvider } from './context/verification';
import { AppRouter } from './routers/AppRouter';

function App() {
	return (
		<>
			<AuthContextProvider>
				<VerificationContextProvider>
					<AppRouter />
				</VerificationContextProvider>
			</AuthContextProvider>
		</>
	);
}

export default App;
