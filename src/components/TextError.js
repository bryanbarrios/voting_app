import React from 'react';

export const TextError = ({ children }) => {
	return (
		<div className="text-red-500 inline-flex items-center space-x-1 my-1	">
			<svg
				className="w-5 h-5"
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
			<span className="font-medium text-sm">{children}</span>
		</div>
	);
};
