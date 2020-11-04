import React, { useState } from 'react';
import { SidebarDropdownItem } from './SidebarDropdownItem';

export const SidebarDropdown = ({ text, items = [], children }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button
				className="duration-200 ease-in inline-flex items-center justify-between whitespace-no-wrap p-3 hover:bg-gray-100 rounded-lg text-gray-600 appearance-none focus:outline-none"
				value={text}
			>
				<div className="inline-flex items-center">
					<span>{children}</span>
					<span className="mx-2">{text}</span>
				</div>
				<div>
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
								d="M19 9l-7 7-7-7"
							></path>
						</svg>
					</span>
				</div>
			</button>
			<div className="my-1 w-full bg-white shadow-md rounded-lg">
				{items.length !== 0 &&
					items.map((item) => (
						<SidebarDropdownItem key={item.key} text={item.text} to={item.to} />
					))}
			</div>
		</>
	);
};
