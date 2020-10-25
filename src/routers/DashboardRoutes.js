import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardScreen } from '../screens/DashboardScreen';

export const DashboardRoutes = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/dashboard" component={DashboardScreen} />
			</Switch>
		</div>
	);
};
