import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import cx from 'classnames';
import logo from '../assets/images/logos/logo.svg';
import compactLogo from '../assets/images/logos/compact-logo.svg';
import { useVerification } from '../context/verification';

export const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [atTopOfPage, setAtTopOfPage] = useState(false);

	const { user } = useVerification()

	console.log(user)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 24) {
				setAtTopOfPage(true);
			} else {
				setAtTopOfPage(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<nav
				className={cx('bg-white w-full sticky top-0', {
					'border-solid border-b-2 border-gray-200': atTopOfPage,
				})}
			>
				<div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								className="inline-flex items-center justify-center p-2 text-gray-500 duration-150 ease-in-out rounded-md focus:outline-none"
								aria-label="Main menu"
								aria-expanded="false"
								onClick={() => setNavbarOpen(!navbarOpen)}
							>
								<svg
									className={cx('h-6 w-6', {
										block: !navbarOpen,
										hidden: navbarOpen,
									})}
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
								<svg
									className={cx('h-6 w-6', {
										block: navbarOpen,
										hidden: !navbarOpen,
									})}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
							<div className="flex-shrink-0">
								<Link to="/">
									<img
										className="block w-auto h-8 sm:hidden"
										src={compactLogo}
										alt="VoteNow logo"
									/>
									<img
										className="hidden w-auto h-8 sm:block"
										src={logo}
										alt="VoteNow logo"
									/>
								</Link>
							</div>
							<div className="hidden sm:block sm:ml-6">
								<div className="flex">
									<NavLink
										to="/"
										className="px-2 py-2 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in rounded-md focus:outline-none hover:text-gray-500"
									>
										Inicio
									</NavLink>
									<NavLink
										to="/elections"
										className="px-2 py-2 text-sm font-medium leading-5 text-gray-600 transition duration-150 ease-in rounded-md focus:outline-none hover:text-gray-500"
									>
										Elecciones
									</NavLink>
								</div>
							</div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<NavLink
								to="/login"
								className="text-sm font-semibold leading-5 text-gray-600 transition duration-150 ease-in rounded-md focus:outline-none hover:text-gray-500"
							>
								Iniciar sesión
							</NavLink>
						</div>
					</div>
				</div>
				<div
					className={cx({
						'hidden sm:hidden': !navbarOpen,
					})}
				>
					<div className="px-2 pt-2 pb-3">
						<NavLink
							to="/"
							className="block px-3 py-2 text-base font-medium text-gray-600 transition duration-150 ease-in-out rounded-md focus:outline-none"
						>
							Inicio
						</NavLink>
						<NavLink
							to="/elections"
							className="block px-3 py-2 mt-1 text-base font-medium text-gray-600 transition duration-150 ease-in-out rounded-md focus:outline-none"
						>
							Elecciones
						</NavLink>
					</div>
				</div>
			</nav>
		</>
	);
};
