import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Navbar } from '../components/Navbar';
import { HomeScreen } from '../screens/HomeScreen';
import { ElectionsScreen } from '../screens/ElectionsScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<div className="container mx-auto px-4 py-6">
				<Switch>
					<PublicRoute
						exact
						path="/"
						isAuthenticated={false}
						restricted={false}
						component={HomeScreen}
					/>
					<PublicRoute
						exact
						path="/elections"
						isAuthenticated={false}
						restricted={false}
						component={ElectionsScreen}
					/>
					<PublicRoute
						exact
						path="/login"
						isAuthenticated={false}
						restricted={false}
						component={LoginScreen}
					/>
					<PrivateRoute
						path="/dashboard"
						isAuthenticated={true}
						component={DashboardRoutes}
					/>
				</Switch>
			</div>
		</Router>
	);
};
