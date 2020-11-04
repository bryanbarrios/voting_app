import React, { useState } from 'react';
import { DashboardNavbar } from './DashboardNavbar';
import { Sidebar } from './Sidebar';
import Transition from './Transition';

export const DashboardBaseLayout = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	return (
		<div className="bg-dashboard min-h-screen">
			<DashboardNavbar>
				<div className="flex">
					<Transition
						show={isSidebarOpen}
						enter="transition ease-out duration-300"
						enterFrom="transform opacity-0"
						enterTo="transform opacity-100 left-0"
						leave="transition ease-in duration-200"
						leaveFrom="transform opacity-100"
						leaveTo="transform opacity-0 -left-16"
					>
						<Sidebar />
					</Transition>
					<Transition
						show={isSidebarOpen}
						enter="transition ease-in duration-700"
						leave="transition ease-out duration-500"
					>
						<div className="w-full overflow-hidden p-6">{children}</div>
					</Transition>
				</div>
			</DashboardNavbar>
		</div>
	);
};
