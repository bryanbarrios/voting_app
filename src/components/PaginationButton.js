import React from 'react';

export const PaginationButton = ({ children, text, onClick, isDisabled }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="h-full w-full sm:w-full md:w-auto px-2 mx-1 md:my-1 text-center inline-flex justify-center items-center bg-blue-pattens rounded-lg font-semibold text-sm text-blue-pacific appearance-none hover:bg-blue-pacific hover:text-white duration-200 ease-in focus:outline-none"
			disabled={isDisabled}
		>
			{children}
			{text}
		</button>
	);
};
