import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { DashboardBaseLayout } from '../components/DashboardBaseLayout';
import { DashboardScreen } from '../screens/DashboardScreen';
import { NotFoundScreen } from '../screens/NotFoundScreen';
import { UsersScreen } from '../screens/UsersScreen';
import { PresidentialCandidatesScreen } from '../screens/PresidentialCandidatesScreen';
import { MunicipalCandidatesScreen } from '../screens/MunicipalCandidatesScreen';
import { PoliticalPartiesScreen } from '../screens/PoliticalPartiesScreen';
import { PresidencialVoting } from '../screens/PresidencialVoting';
import { MunicipalVoting } from '../screens/MunicipalVoting';
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
								path="/dashboard/candidates/presidential-candidates"
								component={PresidentialCandidatesScreen}
							/>
							<Route
								path="/dashboard/candidates/municipal-candidates"
								component={MunicipalCandidatesScreen}
							/>
							<Route
								path="/dashboard/political-parties"
								component={PoliticalPartiesScreen}
							/>
							<Route
								path="/dashboard/voting/presidential-voting"
								component={PresidencialVoting}
							/>
							<Route
								path="/dashboard/voting/municipal-voting"
								component={MunicipalVoting}
							/>
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
