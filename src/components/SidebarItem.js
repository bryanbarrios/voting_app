import React from 'react';
import { Link } from 'react-router-dom';

export const SidebarItem = ({ text, to, children }) => {
	return (
		<Link
			to={to}
			className="duration-200 ease-in inline-flex items-center whitespace-no-wrap p-3 hover:bg-gray-100 rounded-lg text-gray-600 w-full"
		>
			<span>{children}</span>
			<span className="ml-2">{text}</span>
		</Link>
	);
};
