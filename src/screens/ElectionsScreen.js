import React from 'react';
import CardList from '../components/card/CardList';
import { withNavbar } from '../components/hoc/withNavbar';

const ElectionsScreen = () => {
	return (
		<div>
			<p>Elections Screen</p>
			<CardList />
		</div>
	);
};

export default withNavbar(ElectionsScreen)