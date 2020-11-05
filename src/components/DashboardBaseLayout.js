import React, { useState } from 'react';
import cx from 'classnames';
import { DashboardNavbar } from './DashboardNavbar';
import { Sidebar } from './Sidebar';
import Transition from './Transition';

export const DashboardBaseLayout = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	return (
		<div className="bg-dashboard min-h-screen">
			<DashboardNavbar isOpen={setIsSidebarOpen}>
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
					<div
						className={cx('w-full overflow-hidden p-4 lg:p-6 sm:p-4 md:block', {
							hidden: isSidebarOpen,
						})}
					>
						{children}
					</div>
				</div>
			</DashboardNavbar>
		</div>
	);
};
