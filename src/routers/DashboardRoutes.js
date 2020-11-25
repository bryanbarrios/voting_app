import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { DashboardBaseLayout } from '../components/DashboardBaseLayout';
import { DashboardScreen } from '../screens/DashboardScreen';
import { NotFoundScreen } from '../screens/NotFoundScreen';
import { UsersScreen } from '../screens/UsersScreen';
import { CandidatesScreen } from '../screens/CandidatesScreen';
import { PoliticalPartiesScreen } from '../screens/PoliticalPartiesScreen';
import { VotingScreen } from '../screens/VotingScreen';
import { StatisticsScreen } from '../screens/StatisticsScreen';

export const DashboardRoutes = () => {
	return (
		<Router>
			<Route
				render={(props) => (
					<DashboardBaseLayout {...props}>
						<Switch>
							<Route exact path="/dashboard" component={DashboardScreen} />
							<Route path="/dashboard/users" component={UsersScreen} />
							<Route
								path="/dashboard/candidates"
								component={CandidatesScreen}
							/>
							<Route
								path="/dashboard/political-parties"
								component={PoliticalPartiesScreen}
							/>
							<Route path="/dashboard/voting" component={VotingScreen} />
							<Route
								path="/dashboard/statistics"
								component={StatisticsScreen}
							/>
							<Route path="*" component={NotFoundScreen} />
						</Switch>
					</DashboardBaseLayout>
				)}
			/>
		</Router>
	);
};
