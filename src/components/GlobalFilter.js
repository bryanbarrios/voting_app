import React, {useState} from 'react';
import { useAsyncDebounce } from 'react-table';

export const GlobalFilter = ({
	preGlobalFilteredRows,
	globalFilter,
	setGlobalFilter,
}) => {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 200);
	return (
		<div>
			<input
				value={value || ''}
				onChange={(event) => {
					setValue(event.target.value);
					onChange(event.target.value);
				}}
				className="p-2 text-sm rounded-md bg-white shadow focus:outline-none focus:shadow-outline"
				placeholder={`Buscar entre ${count} registros`}
			/>
		</div>
	);
};
