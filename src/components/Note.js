import React, { useEffect, useState } from 'react';
import cx from 'classnames';

export const Note = ({ children, seconds }) => {
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setHidden(true), seconds * 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [seconds]);

	return (
		<div
			className={cx(
				'w-full my-1 p-4 space-y-2 flex items-center flex-col text-gray-600 bg-gray-100 rounded-lg',
				{ hidden: hidden }
			)}
		>
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
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					></path>
				</svg>
			</span>
			<p className="text-sm text-center font-medium">{children}</p>
		</div>
	);
};
