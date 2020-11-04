import React from 'react';
import { Link } from 'react-router-dom';

export const SidebarDropdownItem = ({ to, text }) => {
	return (
		<Link
			to={to}
			className="duration-200 ease-in inline-flex items-center whitespace-no-wrap p-3 hover:bg-gray-100 rounded-lg text-gray-600 w-full text-sm"
		>
			{text}
		</Link>
	);
};
