import React from 'react';
import { PaginationButton } from './PaginationButton';
import { PaginationInput } from './PaginationInput';

export const Pagination = ({
	firstPage,
	previousPage,
	canPreviousPage,
	nextPage,
	canNextPage,
	lastPage,
	pageIndex,
	pageSize,
	setPageSize,
	totalPages,
}) => {
	return (
		<div className="flex items-center justify-between my-3">
			<div className="bg-white shadow h-10 w-auto p-1 my-1 rounded-lg flex items-center">
				<PaginationButton onClick={firstPage} isDisabled={canPreviousPage}>
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
						></path>
					</svg>
				</PaginationButton>
				<PaginationButton
					text="Anterior"
					onClick={previousPage}
					isDisabled={canPreviousPage}
				/>
				<div className="h-full border-1 border-gray-400 px-4 flex items-center justify-center rounded-lg">
					<span className="text-gray-600 font-semibold text-xs inline-block">
						Página {pageIndex} de {totalPages}
					</span>
				</div>
				<PaginationButton
					text="Siguiente"
					onClick={nextPage}
					isDisabled={canNextPage}
				/>
				<PaginationButton onClick={lastPage} isDisabled={canNextPage}>
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 5l7 7-7 7M5 5l7 7-7 7"
						></path>
					</svg>
				</PaginationButton>
			</div>
			<div className="bg-white shadow h-10 w-auto p-1 rounded-lg inline-flex items-center">
				<PaginationInput pageSize={pageSize} onChange={setPageSize} />
			</div>
		</div>
	);
};
