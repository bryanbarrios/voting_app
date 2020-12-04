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
				src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="Data"
				className="w-full h-64 rounded-lg object-cover"
			/>
			<p>
				Se incluye la administración de usuarios, candidatos, partidos
				políticos, votaciones, además de estadísticas que le ayudarán a
				comprender el flujo de datos.
			</p>
		</div>
	);
};
