import React from 'react';

export const EmailNotification = () => {
	return (
		<div className="w-full my-1 p-4 space-y-2 flex items-center flex-col text-blue-500 bg-blue-100 rounded-lg">
			<span>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					></path>
				</svg>
			</span>
			<p className="text-sm text-center font-medium">
				Hemos enviado un código de verificación a su correo electrónico.
				Ingréselo a continuación.
			</p>
		</div>
	);
};
