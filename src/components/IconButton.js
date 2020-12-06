import React from 'react';

export const IconButton = ({ onClick, children }) => {
	return (
		<button
			className="text-secondary-600 bg-white shadow hover:shadow-lg rounded-full my-2 p-2 font-semibold focus:outline-none focus:shadow-outline transition duration-200 ease-in"
			onClick={onClick}
		>
			{children}
		</button>
	);
};
