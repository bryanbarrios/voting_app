import React from 'react';
import { Dropdown } from './Dropdown';
import { Input } from './Input';
import { SingleOtpInput } from './SingleOtpInput';
import { Textarea } from './Textarea';

export const FormikControl = ({ control, ...rest }) => {
	switch (control) {
		case 'input':
			return <Input {...rest} />;
		case 'singleOtpInput':
			return <SingleOtpInput {...rest} />;
		case 'dropdown':
			return <Dropdown {...rest} />;
		case 'textarea':
			return <Textarea {...rest} />;
		case 'select':
		case 'radio':
		case 'checkbox':
		case 'date':
		default:
			return null;
	}
};
