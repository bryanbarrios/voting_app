import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';

export const SingleOtpInput = ({ name, ...rest }) => {
	return (
		<div className="flex flex-col">
			<Field id={name} name={name} {...rest} as={CustomInputComponent} />
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

const CustomInputComponent = ({ ...rest }) => (
	<input
		className="bg-gray-200 text-center rounded-lg text-xl md:text-3xl outline-none focus:shadow-outline tracking-widest"
		{...rest}
	/>
);
