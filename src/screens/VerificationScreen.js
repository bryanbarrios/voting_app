import React from 'react';
import { Art } from '../components/art/Art';
import { OtpControl } from '../components/OtpControl';

export const VerificationScreen = () => {
	return (
		<div className="flex">
			<Art />
			<div className="p-4 w-full md:max-w-xl md:my-auto md:mx-auto">
				<OtpControl numberOfInputs={6} type="number" />
			</div>
		</div>
	);
};
