import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

export const Sidebar = ({ isOpen }) => {
	const styles = {
		height: 'calc(100vh - 64px)',
	};

	return (
		<aside
			className={cx('bg-white w-64 lg:w-1/4 p-3 flex', { hidden: !isOpen })}
			style={styles}
		>
			<div className="flex flex-col w-full">
				<Link
					to="/dashboard/users"
					className="duration-200 ease-in inline-flex items-center whitespace-no-wrap p-3 hover:bg-gray-100 rounded-lg text-gray-600"
				>
					<span className="mr-2">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							></path>
						</svg>
					</span>
					Usuarios
				</Link>
				<Link className="duration-200 ease-in inline-flex items-center whitespace-no-wrap p-3 hover:bg-gray-100 rounded-lg text-gray-600">
					<span className="mr-2">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
							></path>
						</svg>
					</span>
					Candidatos
				</Link>
				<Link
					to="/dashboard/political-parties"
					className="duration-200 ease-in inline-flex items-center whitespace-no-wrap p-3 hover:bg-gray-100 rounded-lg text-gray-600"
				>
					<span className="mr-2">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
							></path>
						</svg>
					</span>
					Partidos Políticos
				</Link>
				<Link className="duration-200 ease-in inline-flex items-center whitespace-no-wrap p-3 hover:bg-gray-100 rounded-lg text-gray-600">
					<span className="mr-2">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
							></path>
						</svg>
					</span>
					Votaciones
				</Link>
				<Link
					to="/dashboard/statistics"
					className="duration-200 ease-in inline-flex items-center whitespace-no-wrap p-3 hover:bg-gray-100 rounded-lg text-gray-600"
				>
					<span className="mr-2">
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
							></path>
						</svg>
					</span>
					Estadísticas
				</Link>
			</div>
		</aside>
	);
};
