import React from 'react';

export const OtpInput = ({ type }) => {
	return (
		<input
			type={type}
			className="bg-gray-200 w-12 h-12 md:w-16 md:h-16 text-center rounded-lg text-xl md:text-3xl outline-none focus:shadow-outline"
			maxLength="1"
		/>
	);
};
