import React, { useState } from 'react';
import { DashboardNavbar } from './DashboardNavbar';
import { Sidebar } from './Sidebar';

export const DashboardBaseLayout = ({ children }) => {
	const [isSidebarOpened, setIsSidebarOpened] = useState(true);
	const handleSidebarChange = (newState) => setIsSidebarOpened(newState);

	return (
		<div className="bg-dashboard">
			<DashboardNavbar onChange={handleSidebarChange} />
			<div className="flex">
				<Sidebar isOpen={isSidebarOpened} />
				<div className="container mx-auto p-6">{children}</div>
			</div>
		</div>
	);
};
