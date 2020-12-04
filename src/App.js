import React from 'react';
import { AuthContextProvider } from './context/auth';
import { AppRouter } from './routers/AppRouter';

function App() {
	return (
		<>
			<AuthContextProvider>
				<AppRouter />
			</AuthContextProvider>
		</>
	);
}

export default App;
