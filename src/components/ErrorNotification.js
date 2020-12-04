import React from 'react';

export const ErrorNotification = ({ children }) => {
	return (
		<div className="w-full my-1 p-4 space-y-2 flex items-center flex-col text-red-500 bg-red-100 rounded-lg">
			<span>
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
						d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
			</span>
			<p className="text-sm text-center font-medium">{children}</p>
		</div>
	);
};
