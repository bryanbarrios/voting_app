import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

export const GlobalFilter = ({
	preGlobalFilteredRows,
	globalFilter,
	setGlobalFilter,
}) => {
	/* 	const count = preGlobalFilteredRows.length; */
	const [value, setValue] = useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 200);
	return (
		<div className="inline-flex bg-white rounded-lg p-2 shadow-md">
			<span className="text-sm flex items-center justify-center pr-1 text-gray-500">
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
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					></path>
				</svg>
			</span>
			<input
				value={value || ''}
				onChange={(event) => {
					setValue(event.target.value);
					onChange(event.target.value);
				}}
				className="w-auto text-sm focus:outline-none"
				placeholder={`Buscar registro`}
			/>
		</div>
	);
};
