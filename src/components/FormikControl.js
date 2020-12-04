import React from 'react';
import { Input } from './Input';
import { SingleOtpInput } from './SingleOtpInput';

export const FormikControl = ({ control, ...rest }) => {
	switch (control) {
		case 'input':
			return <Input {...rest} />;
		case 'singleOtpInput':
			return <SingleOtpInput {...rest} />;
		case 'textarea':
		case 'select':
		case 'radio':
		case 'checkbox':
		case 'date':
		default:
			return null;
	}
};
