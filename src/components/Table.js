import React from 'react';
import { useTable } from 'react-table';

export const Table = ({ columns, data }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data });

	return (
		<>
			<div className="flex flex-col">
				<div className="overflow-x-auto">
					<div className="align-middle inline-block min-w-full">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table
								className="min-w-full divide-y divide-gray-200"
								{...getTableProps}
							>
								<thead>
									{headerGroups.map((headerGroup) => (
										<tr {...headerGroup.getHeaderGroupProps()}>
											{headerGroup.headers.map((column) => (
												<th
													className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 text-gray-500 font-semibold uppercase tracking-wider"
													{...column.getHeaderProps()}
												>
													{column.render('Header')}
												</th>
											))}
										</tr>
									))}
								</thead>
								<tbody
									className="bg-white divide-y divide-gray-200"
									{...getTableBodyProps}
								>
									{rows.map(row => {
										prepareRow(row);
										return (
											<tr {...row.getRowProps()}>
												{row.cells.map(cell => {
													return (
														<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700" {...cell.getCellProps()}>
															{
																cell.render('Cell')
															}
														</td>
													);
												})}
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
