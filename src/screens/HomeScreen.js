import React from 'react';
import { withNavbar } from '../components/hoc/withNavbar';

const HomeScreen = () => {
	return (
		<div>
			<p>HomeScreen</p>
		</div>
	);
};

export default withNavbar(HomeScreen);
