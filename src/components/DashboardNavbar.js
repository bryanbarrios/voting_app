import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logos/logo.svg';

export const DashboardNavbar = ({ children, isOpen }) => {
	const [navbarOpen, setNavbarOpen] = useState(true);

	useEffect(() => {
		isOpen(navbarOpen);
	}, [isOpen, navbarOpen]);

	return (
		<>
			<nav
				className={cx('bg-white w-full border-b', {
					'sticky top-0 z-50': !navbarOpen,
				})}
			>
				<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-4">
					<div className="relative flex items-center justify-between h-16">
						<div className="flex items-center">
							<button
								className="p-2 text-gray-500 duration-150 ease-in-out rounded-md focus:outline-none"
								aria-label="Main menu"
								aria-expanded="false"
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
						<div className="flex items-center flex-1 sm:items-stretch sm:justify-start">
							<div className="flex-shrink-0">
								<Link to="/dashboard">
									<img className="w-auto h-8" src={logo} alt="VoteNow logo" />
								</Link>
							</div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<p className="text-sm font-semibold leading-5 text-gray-600 transition duration-150 ease-in hover:text-gray-500 cursor-pointer">
								Administrador
							</p>
						</div>
					</div>
				</div>
			</nav>
			{children}
		</>
	);
};
