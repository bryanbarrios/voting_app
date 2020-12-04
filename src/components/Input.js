import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';

export const Input = ({ label, name, ...rest }) => {
	return (
		<div className="flex flex-col my-1">
			<label className="text-sm font-semibold my-2 text-gray-600" htmlFor={name}>
				{label}
			</label>
			<Field id={name} name={name} {...rest} as={CustomInputComponent} />
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

const CustomInputComponent = ({...rest}) => (
	<input className="bg-gray-200 rounded-md px-3 py-2 outline-none focus:shadow-outline" {...rest} />
);