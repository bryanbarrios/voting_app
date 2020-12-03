import React from 'react';
import { OtpInput } from './OtpInput';
import { Button } from './Button';

export const OtpControl = ({ numberOfInputs, type, ...rest }) => {
	const inputs = [];

	for (let index = 0; index < numberOfInputs; index++) {
		inputs.push(<OtpInput key={index} type={type} {...rest} />);
	}

	return (
		<div className="flex flex-col p-6 rounded-lg items-center">
			<h1 className="self-center text-xl md:text-2xl font-bold text-secondary-500 mb-4">
				Ingrese el código de verificación
			</h1>
			<div className="flex flex-row space-x-2">{inputs}</div>
			<div className="mx-auto">
				<Button text="Verificar" variantColor="secondary" />
			</div>
		</div>
	);
};
