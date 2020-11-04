import React from 'react';
import loader from '../assets/svg-loaders/oval.svg';

export const Spinner = () => {
	return (
		<div className="inline-flex items-center">
			<img src={loader} alt="Loader" />
			<span className="text-blue-pacific font-semibold text-base ml-1">
				Cargando
			</span>
		</div>
	);
};
