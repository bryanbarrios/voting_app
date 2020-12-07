import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';
import AsyncSelect from 'react-select/async';

export const Dropdown = ({ label, name, ...rest }) => {
	return (
		<div className="flex flex-col my-1">
			<label
				className="text-sm font-semibold my-2 text-gray-600"
				htmlFor={name}
			>
				{label}
			</label>
			<Field id={name} name={name} {...rest} as={DropdownComponent} />
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

const DropdownComponent = ({ ...rest }) => <AsyncSelect {...rest} />;
