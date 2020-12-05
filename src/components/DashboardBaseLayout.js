import React, { useState } from 'react';
import DashboardNavbar  from './DashboardNavbar';
import { Sidebar } from './Sidebar';
import Transition from './Transition';

export const DashboardBaseLayout = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className="bg-dashboard flex min-h-screen">
			<Transition
				show={isSidebarOpen}
				enter="transition ease-out duration-500"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-100"
				leaveFrom="transform opacity-100 scale-300"
				leaveTo="transform opacity-0 scale-95"
			>
				<Sidebar />
			</Transition>
			<div className="flex flex-col w-full">
				<DashboardNavbar isOpen={setIsSidebarOpen} />
				<div className="container p-4 lg:p-6">
					{children}
				</div>
			</div>
		</div>
	);
};
