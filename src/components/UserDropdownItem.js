import React from 'react';
import { Link } from 'react-router-dom';

export const UserDropdownItem = ({ to, text, action }) => {
	return (
		<Link
			to={to}
			role="menuItem"
			className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
			onClick={action}
		>
			{text}
		</Link>
	);
};
