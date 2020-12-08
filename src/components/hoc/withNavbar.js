import React from 'react';
import { Navbar } from '../Navbar';

export const withNavbar = (WrappedContainer) => {
	return (props) => {
		return (
			<>
				<Navbar />
				<div className="max-w-screen-lg mx-auto px-4 py-6">
					<WrappedContainer {...props} />
				</div>
			</>
		);
	};
};
