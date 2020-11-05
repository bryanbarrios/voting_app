import React from 'react';

export const PaginationInput = ({ pageSize, onChange }) => {
	return (
		<select
			className="h-full w-full lg:w-auto sm:w-full px-2 mx-1 bg-blue-pattens rounded-lg font-semibold text-sm text-blue-pacific appearance-none cursor-pointer focus:outline-none"
			value={pageSize}
			onChange={onChange}
		>
			{[10, 20, 30, 40, 50].map((pageSize) => (
				<option
					key={pageSize}
					value={pageSize}
					className="bg-white text-gray-600"
				>
					Mostrar {pageSize} resultados por página ▾
				</option>
			))}
		</select>
	);
};
