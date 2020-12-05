import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PublicRoute } from '../components/PublicRoute';
import { PrivateRoute } from '../components/PrivateRoute';
import { LoginScreen } from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ElectionsScreen from '../screens/ElectionsScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { NotFoundScreen } from '../screens/NotFoundScreen';
import { VerificationScreen } from '../screens/VerificationScreen';
import { useVerification } from '../context/verification';
import { useAuth } from '../context/auth';

export const AppRouter = () => {
	const { isVerified, user } = useVerification();
	const { isAuthenticated } = useAuth();

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						exact
						path="/"
						isAuthenticated={isVerified}
						restricted={false}
						component={HomeScreen}
					/>
					<PrivateRoute
						exact
						path="/elections"
						isAuthenticated={isVerified}
						component={ElectionsScreen}
					/>
					<PublicRoute
						exact
						path="/login"
						isAuthenticated={isVerified}
						restricted={true}
						component={LoginScreen}
					/>
					<PrivateRoute
						exact
						path="/verification"
						isAuthenticated={isAuthenticated}
						component={VerificationScreen}
					/>
					<PrivateRoute
						path="/dashboard"
						rol={user?.rol}
						isAuthenticated={isVerified}
						component={DashboardRoutes}
					/>
					<Route path="*" component={NotFoundScreen} />
				</Switch>
			</div>
		</Router>
	);
};
