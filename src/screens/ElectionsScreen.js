import React from 'react';
import { withNavbar } from '../components/hoc/withNavbar';

const ElectionsScreen = () => {
	return (
		<div>
			<p>Elections Screen</p>
		</div>
	);
};

export default withNavbar(ElectionsScreen)