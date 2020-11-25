import React from 'react';

export const FormikControl = ({ control }) => {
	switch (control) {
		case 'input':
		case 'textarea':
		case 'select':
		case 'radio':
		case 'checkbox':
		case 'date':
		default:
			return null;
	}
};
