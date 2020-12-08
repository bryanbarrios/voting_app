import React from 'react';

export const DashboardScreen = () => {
	return (
		<div className="space-y-3">
			<h1 className="text-3xl font-bold text-gray-700">Bienvenido</h1>
			<p>
				En el Panel de Administración usted podrá gestionar todo el Sistema de
				Votaciones.
			</p>
			<img
				src="https://res.cloudinary.com/dejau9zgq/image/upload/v1607428848/DataV.svg"
				alt="Data"
				className="rounded-lg object-cover"
				style={{height: '420px', margin: '0 auto'}}
			/>
			<p>
				Se incluye la administración de usuarios, candidatos, partidos
				políticos, votaciones, además de estadísticas que le ayudarán a
				comprender el flujo de datos.
			</p>
		</div>
	);
};
