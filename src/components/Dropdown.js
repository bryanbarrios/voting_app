import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';

export const Dropdown = ({ label, name, isAsync, ...rest }) => {
	return (
		<div className="flex flex-col my-1">
			<label
				className="text-sm font-semibold my-2 text-gray-600"
				htmlFor={name}
			>
				{label}
			</label>
			<Field
				id={name}
				name={name}
				{...rest}
				as={isAsync ? AsyncDropdownComponent : DropdownComponent}
			/>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

const AsyncDropdownComponent = ({ ...rest }) => <AsyncSelect {...rest} />;
const DropdownComponent = ({ ...rest }) => <Select {...rest} />;
